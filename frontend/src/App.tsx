import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { SetupPage } from '@pages/Setup'
import { Story } from '@pages/Story'
import { NotFound } from '@pages/NotFound'
import { StoriesListPage } from '@pages/StoriesList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories/:storyID/setup" element={<SetupPage />} />
      <Route path="/stories/:storyID" element={<Story />} />
      <Route path="/stories" element={<StoriesListPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App