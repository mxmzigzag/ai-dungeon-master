import { StorytellingPanel } from "./components/StorytellingPanel/StorytellingPanel"

function App() {
  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold text-center text-white">
          AI Dungeon Master
        </h1>

        <StorytellingPanel text="Hello, are you ready to embark on an adventure?" />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Start Adventure
        </button>
      </div>
    </div>
  )
}

export default App