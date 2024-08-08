// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  fruits: {
    name: string;
    season: string;
    description: string;
    imageUrl: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    fruits: [
      {
        name: "watermelon",
        season: "Summer",
        description: "A refreshing and juicy fruit, perfect for hot days.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1663855531381-f9c100b3c48f?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "apple",
        season: "fall",
        description: "Crisp and sweet, apples are great for pies and snacks.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "orange",
        season: "winter",
        description: "Rich in vitamin C, oranges are both sweet and tangy.",
        imageUrl: "https://images.unsplash.com/photo-1459663296021-50769c04b149?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "strawberry",
        season: "spring",
        description: "Sweet and fragrant, strawberries are a favorite for desserts.",
        imageUrl: "https://images.unsplash.com/photo-1543528176-61b239494933?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8MHwwfHx8MA%3D%3D"
      },
      // {
      //   name: "pear_1",
      //   season: "winter",
      //   description: "pears are elegant, fiber-rich fruits that boast a range of colors, a gentle sweetness, and a refreshing, subtle graininess.",
      //   imageUrl: "https://images.unsplash.com/photo-1570115114436-63d3405246e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdsZSUyMHBlYXJ8ZW58MHx8MHx8fDA%3D"
      // },
      {
        name: "pear_2",
        season: "winter",
        description: "Pears are elegant, fiber-rich fruits that boast a range of colors, a gentle sweetness, and a refreshing, subtle graininess.",
        imageUrl: "https://images.unsplash.com/photo-1531746808781-ce4c1b3a5ff2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdvJTIwcGVhcnN8ZW58MHx8MHx8fDA%3D"
      },
      {
        name: "pear_3",
        season: "winter",
        description: "Pears are elegant, fiber-rich fruits that boast a range of colors, a gentle sweetness, and a refreshing, subtle graininess.",
        imageUrl: "https://images.unsplash.com/photo-1453487021979-5b739b2849f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhyZWUlMjBwZWFyc3xlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  });
}