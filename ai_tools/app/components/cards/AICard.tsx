import Image from 'next/image';
import { useState } from 'react';

interface AITool {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  pricing: string;
  rating: number;
}

interface AICardProps {
  tool: AITool;
}

const AICard = ({ tool }: AICardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        {!imageError && tool.image ? (
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition hover:scale-105"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          // Fallback image or placeholder
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-2xl">{tool.name[0]}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{tool.name}</h3>
          <div className="flex items-center">
            <svg 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-4 h-4 text-aitools"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-1">{tool.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-2 flex-grow">{tool.description}</p>
      </div>
      
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        <span className="text-sm font-medium text-aitools">{tool.pricing}</span>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{tool.category}</span>
      </div>
    </div>
  );
};

export default AICard;
