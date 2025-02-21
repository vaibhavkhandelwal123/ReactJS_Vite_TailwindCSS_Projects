import React from 'react'
import Api from './components/api'

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/020/735/980/non_2x/white-cartoon-clouds-cute-cloudy-blue-sky-2d-game-comic-elements-heaven-summer-weather-background-isolated-set-vector.jpg'"}}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">API testing</h1>
      <Api />
    </div>
  )
}

export default App
