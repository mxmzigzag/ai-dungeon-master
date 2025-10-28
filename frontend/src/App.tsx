import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { SetupPage } from '@pages/Setup'
import { Game } from '@pages/Game'
import { NotFound } from '@pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:storyID/setup" element={<SetupPage />} />
      <Route path="/:storyID/story" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App