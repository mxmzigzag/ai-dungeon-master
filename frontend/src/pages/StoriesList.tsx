import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { IStory } from "@/types/story";
import { getStoriesListQuery } from "@api/queries/stories";
import { PageLayout } from "@components/PageLayout/PageLayout"
import { useMemo } from "react";

export function StoriesList() {
  const { storyID } = useParams();

  const { data: storiesListData, isLoading } = useQuery({
    queryKey: ['story', storyID],
    queryFn: () => getStoriesListQuery(),
  });
  const storiesList: IStory[] = useMemo(() => storiesListData?.data ?? [], [storiesListData]);

  return (
    <PageLayout title="My Adventures" withCloseButton>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex items-center gap-4">
            {storiesList.map((story) => (
              <Link key={story.id} to={`/stories/${story.id}`}>
                <div className="flex flex-col gap-2 bg-neutral-900 rounded-2xl shadow-md p-4 w-full max-w-2xl">
                  <h2 className="text-lg font-bold text-[#00a67d] text-center">{story.title}</h2>
                  <p className="text-sm text-gray-400">Style: {story.style}</p>
                  <p className="text-sm text-gray-200">Description: {story.description}</p>
                </div>
              </Link>
            ))}
          </div>
      )}
    </PageLayout>
  )
}