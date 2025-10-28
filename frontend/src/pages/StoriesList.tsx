import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { IStory } from "@/types/story";
import { queryClient } from "@api/queries/queryClient";
import { deleteStoryMutation } from "@api/mutations/stories";
import { getStoriesListQuery } from "@api/queries/stories";
import { PageLayout } from "@components/PageLayout/PageLayout"
import { IconDelete } from "@/icons";

export function StoriesList() {
  const { storyID } = useParams();

  const { data: storiesListData, isLoading } = useQuery({
    queryKey: ['story', storyID],
    queryFn: () => getStoriesListQuery(),
  });
  const storiesList: IStory[] = useMemo(() => storiesListData?.data ?? [], [storiesListData]);

  const { mutate: deleteStory } = useMutation({
    mutationFn: deleteStoryMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['story', storyID] });
    },
  });

  return (
    <PageLayout title="My Adventures" withCloseButton>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
            {storiesList.map((story) => (
              <Link key={story.id} to={`/stories/${story.id}`}>
                <div className="flex flex-col gap-2 bg-neutral-900 rounded-2xl shadow-md p-4 w-full max-w-2xl relative group">
                  <button className="absolute top-3 right-3 bg-[#2e2e2e] rounded-md p-2 hover:bg-[#00a67d] cursor-pointer hidden group-hover:block" onClick={(e) => {
                    e.preventDefault();
                    deleteStory(story.id);
                  }}>
                    <IconDelete color='#fff' width={16} height={16} />
                  </button>
                  <h2 className="text-lg font-bold text-[#00a67d] text-center">{story.title}</h2>
                  <p className="text-sm text-gray-400">Style: {story.style}</p>
                  <p className="text-sm text-gray-200">Description: {story.description}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-center text-[#00a67d]">Heroes</p>
                    {story.heroes.map(hero => (
                      <div key={hero.id} className="flex items-center gap-2">
                        <p className="text-sm text-gray-400">{hero.name} - {hero.race} - {hero.class}</p>
                      </div>
                    ))}

                  </div>
                </div>
              </Link>
            ))}
          </div>
      )}
    </PageLayout>
  )
}