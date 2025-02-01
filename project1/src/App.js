import "./App.css";
import Code from "./components/code.jsx";
import { name } from "./components/home.jsx";
function App() {

  return (
    <Code name={name}/>
  );
}

export default App;
