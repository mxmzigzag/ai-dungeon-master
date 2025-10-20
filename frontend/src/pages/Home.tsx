import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"

export function Home() {
  // Generate a unique game ID using UUID v4
  const gameID = uuidv4()

  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold text-center text-white">
          AI Dungeon Master
        </h1>

        <StorytellingPanel text="Hello, are you ready to embark on an adventure?" />

        <Link 
          to={`/${gameID}/setup`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Start Adventure
        </Link>
      </div>
    </div>
  )
}
