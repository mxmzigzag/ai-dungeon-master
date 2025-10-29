import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { IStory } from "@/types/story";
import { queryClient } from "@api/queries/queryClient";
import { deleteStoryMutation } from "@api/mutations/stories";
import { getStoriesListQuery } from "@api/queries/stories";

import { PageLayout } from "@components/PageLayout"
import { StoriesList } from "@components/StoriesList";

export function StoriesListPage() {
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
       <StoriesList stories={storiesList} onDeleteStory={deleteStory} />
      )}
    </PageLayout>
  )
}