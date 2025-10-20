import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages/Home'
import { SetupPage } from '@pages/Setup'
import { Game } from '@pages/Game'
import { NotFound } from '@pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:gameID/setup" element={<SetupPage />} />
      <Route path="/:gameID/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App