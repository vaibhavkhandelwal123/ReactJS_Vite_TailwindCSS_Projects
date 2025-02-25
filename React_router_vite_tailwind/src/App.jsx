import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-300 w-full flex flex-col items-center mt-10'>
      <h1 className='text-4xl text-center p-10'>
        React - router
      </h1>
    </div>
  )
}

export default App
