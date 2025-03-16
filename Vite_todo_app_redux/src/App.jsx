import Box from "./components/Box";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Learn about Redux Toolkit</h1>
      <Form />
      <Box />
    </div>
  );
}

export default App;
