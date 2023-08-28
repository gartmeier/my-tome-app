'use client';

import React, { useState } from 'react';
import { FaMagic } from 'react-icons/fa';

export default function AIButton() {
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowInput(false);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!showInput && (
        <button
          className="bg-white hover:bg-gray-200 text-gray-500 font-bold p-4 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setShowInput(true)}
        >
          <FaMagic />
        </button>
      )}

      {showInput && (
        <form onSubmit={handleSubmit} className="flex bg-white p-4 rounded shadow border border-gray-300">
          <input
            type="text"
            className="border-0 flex-grow mr-2 p-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};
