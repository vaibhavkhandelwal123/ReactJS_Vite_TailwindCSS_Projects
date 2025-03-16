import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/slice';

const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addhandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; 
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addhandler} className="flex flex-col items-center mt-12 space-y-4">
      <input
        type="text"
        className="bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full max-w-md"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Todo
      </button>
    </form>
  );
};

export default Form;