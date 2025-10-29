import { type FC } from 'react'
import { Link } from "react-router-dom";
import { StoryListItem } from './StoryListItem';
import type { IStoriesListProps } from './StoriesList.props';

const StoriesList: FC<IStoriesListProps> = ({ stories, onDeleteStory }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stories.map((story) => (
        <Link key={story.id} to={`/stories/${story.id}`}>
          <StoryListItem story={story} onDeleteStory={onDeleteStory} />
        </Link>
      ))}
    </div>
  )
}

export { StoriesList }