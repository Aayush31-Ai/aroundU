import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row items-center justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-[#2f5349] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft size={20} />
        <span className="sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-xs sm:max-w-none">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`min-w-10 h-10 rounded-lg font-semibold text-sm transition flex-shrink-0 ${
              currentPage === i + 1
                ? 'bg-[#2f5349] text-white'
                : 'bg-white border border-gray-300 text-[#2f5349] hover:bg-gray-50'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-[#2f5349] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <span className="sm:inline">Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;