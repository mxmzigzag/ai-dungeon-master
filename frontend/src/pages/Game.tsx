import { Link, useParams } from "react-router-dom"
import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"
import { PageLayout } from "@components/PageLayout/PageLayout"

export function Game() {
  const { gameID } = useParams<{ gameID: string }>()

  return (
    <PageLayout title={`Adventure in Progress - Game ${gameID}`}>
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
    </PageLayout>
  )
}
