import { type FC } from 'react'
import type { IPageLayoutProps } from './PageLayout.props'

const PageLayout: FC<IPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#212121]">
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