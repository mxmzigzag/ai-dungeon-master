import { useMemo, type FC } from 'react'
import type { ISetupOptionProps } from './SetupOption.props'
import { getOptionStyles } from './SetupOption.assets';

const SetupOption: FC<ISetupOptionProps> = ({ 
  id, 
  title, 
  description, 
  onClick, 
  style, 
  isActive, 
  customSettings,
  onCustomChange 
}) => {
  const optionStyles = getOptionStyles(style, isActive);

  const isCustom = useMemo(() => id === 'custom', [id]);
  const isCustomInputVisible = useMemo(() => isCustom && isActive, [isCustom, isActive]);

  const handleClick = () => {
    onClick({ id, title, description, style });
  }

  return (
    <div className={`flex flex-col gap-2 rounded-md transition-colors ${optionStyles}`}>
      <button 
        className='text-white text-left px-4 py-2'
        onClick={handleClick}
      >
        <h3 className="text-lg font-bold">{title}</h3>
        {description && <p className="text-sm">{description}</p>}
      </button>

      {isCustomInputVisible && (
        <div className="flex flex-col px-4 pb-4">
          <textarea 
            rows={4}
            placeholder="Enter your ideas" 
            className="w-full py-2 px-3 rounded-md border-2 border-gray-200 text-white bg-gray-900 border-none outline-none" 
              onChange={onCustomChange} 
              value={customSettings}
            />
        </div>
      )}
    </div>
  )
}

export { SetupOption }