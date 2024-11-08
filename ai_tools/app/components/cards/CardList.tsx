import AICard from './AICard';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Tool {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  pricing: string;
  rating: number;
}

interface CardListProps {
  category: string;
}

const CardList = ({ category }: CardListProps) => {
  const [displayedTools, setDisplayedTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchTools = async () => {
      try {
        const response = await axios.get<Tool[]>('http://localhost:8000/api/tools/', {
          params: category ? { category: category } : {},
        });
        setDisplayedTools(response.data);
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTools();
  }, [category]);

  if (isLoading) {
    return (
      <div className="max-w-[1100px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded-t-xl" />
              <div className="p-4 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedTools.map(tool => (
          <AICard key={tool.id} tool={tool} />
        ))}
      </div>
      {displayedTools.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No AI tools found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default CardList;
