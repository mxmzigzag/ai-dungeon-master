import { StorytellingPanel } from "@components/StorytellingPanel/StorytellingPanel"
import { PageLayout } from "@components/PageLayout/PageLayout"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getStoryQuery } from "@api/queries/stories";
import { useMemo } from "react";

export function Game() {
  const { storyID } = useParams();

  const { data: storyData, isLoading } = useQuery({
    queryKey: ['story', storyID],
    queryFn: () => getStoryQuery(storyID!),
  });
  const story = useMemo(() => storyData?.data[0] ?? [], [storyData]);

  return (
    <PageLayout title="Adventure in Progress">
      <StorytellingPanel text={isLoading ? 'Loading...' : story.story_steps[0].text} />

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
