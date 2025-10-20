import { Setup } from "../components/Setup/Setup"
import { Link, useParams } from "react-router-dom"

export function SetupPage() {
  const { gameID } = useParams<{ gameID: string }>()

  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold text-center text-white">
          Adventure Setup - Game {gameID}
        </h1>

        <Setup />

        <div className="flex gap-4">
          <Link 
            to="/" 
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            to={`/${gameID}/game`}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Start Game
          </Link>
        </div>
      </div>
    </div>
  )
}
