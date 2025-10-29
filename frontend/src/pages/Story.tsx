import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import type { IStory } from "@/types/story";
import { getStoryByIdQuery } from "@api/queries/stories";

import { PageLayout } from "@components/PageLayout"
import { StorytellingPanel } from "@components/StorytellingPanel"

export function Story() {
  const { storyID } = useParams();

  const { data: storyData, isLoading } = useQuery({
    queryKey: ['story', storyID],
    queryFn: () => getStoryByIdQuery(storyID!),
  });
  const story: IStory | undefined = useMemo(() => storyData?.data, [storyData]);

  return (
    <PageLayout title={story ? story.title : 'Something went wrong'} withCloseButton>
      {story && (
        <>
          <StorytellingPanel text={isLoading ? 'Loading...' : story.story_steps[0].text} />

          <div className="flex gap-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-80 disabled:bg-gray-500"
              disabled={true}
            >
              Next Turn
            </button>
          </div>
        </>
      )}
    </PageLayout>
  )
}
