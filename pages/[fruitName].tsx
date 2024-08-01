import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Fruit = {
  name: string;
  season: string;
  description: string;
  imageUrl: string;
};

const FruitPage: NextPage = () => {
  const [fruit, setFruit] = useState<Fruit | null>(null);
  const router = useRouter();
  const { fruitName } = router.query;

  useEffect(() => {
    if (!fruitName) return;
    const fetchFruit = async () => {
      const response = await fetch(`http://localhost:3000/api/fruit`);
      const data = await response.json();
      const fruits: Fruit[] = data.fruits;
      const fruit = fruits.find((f) => f.name.toLowerCase() === fruitName.toString().toLowerCase());

      if (fruit) {
        setFruit({
          ...fruit,
          imageUrl: fruit.imageUrl.replace("q=80", "q=60"),
        });
      }
    };

    fetchFruit();
  }, [fruitName]);

  if (!fruit) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto my-8 capitalize">
      <h1 className="text-3xl font-bold text-center mb-4">{fruit.name}</h1>
      <Image src={fruit.imageUrl} alt={fruit.name} width={500} height={300} className="rounded-lg shadow-lg" />
      <p className="text-xl text-center mt-4 font-semibold">Season: <span className="font-semibold">{fruit.season}</span></p>
      <p className="text-gray-600 mt-2 text-center" style={{color: "white"}}>{fruit.description}</p>
    </div>
  );
};

export default FruitPage;

// beginning of getServerSideProps to fetch route param 
// import { GetServerSideProps, NextPage } from "next";
// import Image from "next/image";
// import React from "react";

// type FruitProps = {
// 	fruit: {
// 		name: string;
// 		season: string;
// 		description: string;
// 		imageUrl: string;
// 	};
// };

// const FruitPage: NextPage<FruitProps> = ({ fruit }) => {
// 	return (
//         <div className="max-w-md mx-auto my-8">
//             <h1 className="text-3xl font-bold text-center mb-4">{fruit.name}</h1>
//             <Image src={fruit.imageUrl} alt={fruit.name} width={500} height={300} className="rounded-lg shadow-lg" />
//             <p className="text-xl text-center mt-4 font-semibold">Season: <span className="font-semibold">{fruit.season}</span></p>
//             <p className="text-gray-600 mt-2 text-center">{fruit.description}</p>
//         </div>
// 	);
// };

// export default FruitPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const { fruitName } = context.params || {};

// 	const response = await fetch(`http://localhost:3000/api/fruit`);
// 	const data = await response.json();
// 	const fruits = data.fruits;
// 	const fruit = fruits.find((f: any) => f.name.toLowerCase() === fruitName?.toString().toLowerCase());

// 	if (!fruit) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return {
// 		props: {
// 			fruit: {
// 				...fruit,
// 				imageUrl: fruit.imageUrl.replace("q=80", "q=60"),
// 			},
// 		},
// 	};
// }
// end of getServerSideProps to fetch route param 