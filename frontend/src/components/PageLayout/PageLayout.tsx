import { type FC } from 'react'
import { useNavigate } from 'react-router-dom';
import type { IPageLayoutProps } from './PageLayout.props'
import { IconClose } from '@/icons';

const PageLayout: FC<IPageLayoutProps> = ({ title, children, withCloseButton }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#212121] relative">
      {withCloseButton && (
        <button onClick={() => navigate('/')} className="absolute top-4 right-4 bg-[#2e2e2e] rounded-md p-2 hover:bg-[#00a67d]">
          <IconClose color='#fff' />
        </button>
      )}
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold text-center text-white">
          {title}
        </h1>
      
        {children}
      </div>
    </div>
  )
}

export { PageLayout}