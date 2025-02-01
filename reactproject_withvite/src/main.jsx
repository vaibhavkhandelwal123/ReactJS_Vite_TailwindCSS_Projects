import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return (
    
    <div>
     
      <h1>My App</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)
const name = 'vaibhav';
const reactElement = React.createElement('a',{href:'https://google.com',target:'_blank'} , 'Hello World ',name)

createRoot(document.getElementById('root')).render(
  reactElement
)
