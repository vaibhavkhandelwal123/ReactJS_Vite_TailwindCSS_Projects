import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../slice/Slice";

const Home = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-r from-gray-700 to-gray-900 p-4 flex flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-5xl font-bold mb-8">Redux Counter</h1>
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Increment
        </button>
        <span className="text-4xl font-bold">{value}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Decrement
        </button>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter the number"
        className="px-4 py-2 bg-white text-black border-2 border-gray-400 rounded-lg mb-4 w-64 text-center"
      />
      <button
        onClick={() => dispatch(incrementByValue(inputValue))}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Increment by Value
      </button>
    </div>
  );
};

export default Home;