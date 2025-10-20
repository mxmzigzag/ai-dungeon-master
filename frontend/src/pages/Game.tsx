import { Link, useParams } from "react-router-dom"
import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"

export function Game() {
  const { gameID } = useParams<{ gameID: string }>()

  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold text-center text-white">
          Adventure in Progress - Game {gameID}
        </h1>

        <StorytellingPanel text="Your adventure begins! What would you like to do?" />

        <div className="flex gap-4">
          <Link 
            to={`/${gameID}/setup`}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Change Settings
          </Link>
          <Link 
            to="/" 
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            End Adventure
          </Link>
        </div>
      </div>
    </div>
  )
}
