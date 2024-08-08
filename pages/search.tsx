import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { useRecentlySearchedContext } from '@/contexts/RecentlySearchedContext';

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
  const router = useRouter();
  const { searchTerms, addSearchTerm } = useRecentlySearchedContext();

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

  const handleFruitClick = (fruitName: string) => {
    addSearchTerm(fruitName);
    router.push(`/${fruitName}`);
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
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              style={{ cursor: 'pointer' }}
              onClick={() => handleFruitClick(fruit.name)}
            >
              <div className="relative h-48">
                <Image
                  src={fruit.imageUrl}
                  alt={fruit.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.fruitCardContent}>
                <h2 className={styles.fruitCardTitle}>{fruit.name}</h2>
                <p className={styles.fruitCardSubtitle}>Season: {fruit.season}</p>
                <p className={styles.fruitCardText}>{fruit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">Recently Searched Fruits</h2>
          <ul className="list-disc list-inside">
            {searchTerms.map((term, index) => (
              <li key={index} className="text-center">{term}</li>
            ))}
          </ul>
        </div>

    </div>
    </main>
  );
}
