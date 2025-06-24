import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getPages = (current, total) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

const PageInition = ({page, pageHandler, dynamicPage}) => {
  if (dynamicPage <= 1) return null;

  const pages = getPages(page, dynamicPage);

  return (
    <div className='flex items-center justify-center space-x-2 mt-12 pt-10 pb-10'>
      <button 
        disabled={page === 1} 
        className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-gray-300 transition-colors hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => pageHandler(page - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center space-x-2">
        {pages.map((item, index) => (
          <button 
            key={index}
            disabled={item === '...'}
            className={`flex items-center justify-center w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
              item === page 
                ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-red-500/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            } ${item === '...' ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={()=> typeof item === "number" && pageHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button 
        disabled={page === dynamicPage} 
        className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-gray-300 transition-colors hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => pageHandler(page + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default PageInition
