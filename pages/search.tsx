import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Fruit {
  name: string;
  season: string;
  description: string;
  imageUrl: string;
}

export default function SearchFruits() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(data => {
        setFruits(data.fruits);
        setFilteredFruits(data.fruits);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = fruits.filter(fruit => 
      fruit.season.toLowerCase().includes(term) || 
      fruit.name.toLowerCase().includes(term)
    );
    setFilteredFruits(filtered);
  };

  return (
	<main
		className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
	>
    <div className="min-h-screen">

      {/* <main className="container mx-auto px-4 py-8"> */}
        <h1 className="text-3xl font-bold text-center mb-8">Search Fruits</h1>
        
        <div className="max-w-md mx-auto color-gray-600">
          <input
            type="text"
            placeholder="Search by season or fruit name"
            className="w-full p-2 rounded-md mb-4 text-gray-800"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFruits.map((fruit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={fruit.imageUrl}
                  alt={fruit.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 capitalize">
                <h2 className="text-xl font-semibold text-gray-600 mb-2">{fruit.name}</h2>
                <p className="text-sm text-gray-600 mb-2">Season: {fruit.season}</p>
                <p className="text-sm text-gray-600 mb-2">{fruit.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </main>
  );
}
