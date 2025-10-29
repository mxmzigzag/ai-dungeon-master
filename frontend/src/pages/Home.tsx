import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { StorytellingPanel } from "@components/StorytellingPanel"
import { PageLayout } from "@components/PageLayout"

export function Home() {
  // Generate a unique game ID using UUID v4
  const storyID = uuidv4()

  return (
    <PageLayout title="AI Dungeon Master">
      <StorytellingPanel text="Hello, are you ready to embark on an adventure?" />

      <div className="flex items-center gap-4 ">
        <Link 
          to={`/stories/${storyID}/setup`}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Start New Adventure
        </Link>
        <Link 
          to={`/stories`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          My Adventures
        </Link>
      </div>
  </PageLayout>
  )
}
