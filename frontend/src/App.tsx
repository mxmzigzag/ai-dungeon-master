import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { SetupPage } from '@pages/Setup'
import { Story } from '@/pages/Story'
import { NotFound } from '@pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:storyID/setup" element={<SetupPage />} />
      <Route path="/story/:storyID" element={<Story />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App