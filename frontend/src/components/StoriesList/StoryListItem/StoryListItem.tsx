import { type FC } from 'react'
import { IconDelete } from '@/icons'
import type { IStoryListItemProps } from './StoryListItem.props';

const StoryListItem: FC<IStoryListItemProps> = ({ story, onDeleteStory }) => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-900 rounded-2xl shadow-md p-4 w-full max-w-2xl relative z-10 group hover:shadow-[0px_0px_20px_8px_green] hover:z-0 transition-all duration-300">
      <button className="absolute top-3 right-3 bg-[#2e2e2e] rounded-md p-2 hover:bg-[#00a67d] cursor-pointer hidden group-hover:block" onClick={(e) => {
        e.preventDefault();
        onDeleteStory(story.id);
      }}>
        <IconDelete color='#fff' width={16} height={16} />
      </button>
      <h2 className="text-lg font-bold text-[#00a67d] text-center">{story.title}</h2>
      <p className="text-sm text-gray-400"><span className="text-[#00a67d]">Style:</span> {story.style}</p>
      <p className="text-sm text-gray-200">{story.description}</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-center text-[#00a67d]">Heroes</p>
        {story.heroes.map(hero => (
          <div key={hero.id} className="flex items-center gap-2">
            <p className="text-sm text-gray-400">&#x2022; {hero.name} - {hero.race} - {hero.class}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export { StoryListItem }