import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"
import { PageLayout } from "@components/PageLayout/PageLayout"
import { useAppStore } from "@/stores/useAppStore";

export function Game() {
  const { story } = useAppStore();

  return (
    <PageLayout title="Adventure in Progress">
      <StorytellingPanel text={story} />

      <div className="flex gap-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-80 disabled:bg-gray-500"
          disabled={true}
        >
          Next Turn
        </button>
      </div>
    </PageLayout>
  )
}
