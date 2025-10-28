import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"
import { PageLayout } from "@components/PageLayout/PageLayout"

export function Home() {
  // Generate a unique game ID using UUID v4
  const storyID = uuidv4()

  return (
    <PageLayout title="AI Dungeon Master">
      <StorytellingPanel text="Hello, are you ready to embark on an adventure?" />

      <Link 
        to={`/${storyID}/setup`}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Start Adventure
      </Link>
  </PageLayout>
  )
}
