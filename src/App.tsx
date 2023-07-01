import './App.css'
import Flow from "./components/Flow"
import Navbar from './components/Navbar'
import Input from './components/Input'
import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex flex-row">
        <Flow />
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <Input 
            label="Hello, I'm ChatGPT, how can I help you today?"
            onChange={(e:any) => {setText(e.target.value)}}
            id="user input"
            value={text}
          />
        </div>
      </div>
    </>
  )
}

export default App
