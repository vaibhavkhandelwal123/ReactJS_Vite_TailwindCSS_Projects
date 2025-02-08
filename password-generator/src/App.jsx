import React, { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(char) str += "!@#$%^&*()_+";

    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length+1));
    }

    setpassword(pass);
  },[length, number, char, setpassword]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator();
  },[length, number, char, passwordGenerator]);
  
  return (
    <div className="bg-gray-300 w-full h-screen">
      <div className="w-full h-screen max-w-150 shadow-md mx-auto rounded-lg px-4 py-3 bg-gray-800">
        <h1 className="text-white text-center my-3 text-2xl">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            text="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => setnumber((prev)=>!prev)}
            />
            <label htmlFor="numberInput" className="text-white">Numbers</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => setchar((prev)=>!prev)}
            />
            <label htmlFor="charInput" className="text-white">Characters</label>                 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
