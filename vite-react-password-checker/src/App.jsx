import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [isStrong, setIsStrong] = useState(false);

  const checkPassword = () => {
    let errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters");
    }
    if (password.search(/[A-Z]/) === -1) {
      errors.push("Password must contain at least one capital letter");
    }
    if (password.search(/[a-z]/) === -1) {
      errors.push("Password must contain at least one small letter");
    }
    if (password.search(/[0-9]/) === -1) {
      errors.push("Password must contain at least one number");
    }
    if (password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) === -1) {
      errors.push("Password must contain at least one special character");
    }

    if (errors.length > 0) {
      setResult(errors.join("\n"));
      setIsStrong(false);
    } else {
      setResult("✅ Password is strong!");
      setIsStrong(true);
    }
  };

  return (
    <div className="bg-black text-white flex items-center justify-center w-full h-screen">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-5">Password Checker</h1>
        <input
          type="password"
          className="p-2 border-2 border-amber-500 bg-white text-black rounded-lg w-64 text-center"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={checkPassword}
          className="p-2 mt-4 bg-amber-500 ml-4 text-black rounded-lg shadow-lg w-64"
        >
          Check Password
        </button>
        <p className={`text-lg mt-4 whitespace-pre-line ${isStrong ? 'text-green-500' : 'text-red-500'}`}>
          {result}
        </p>
      </div>
    </div>
  );
}

export default App;
