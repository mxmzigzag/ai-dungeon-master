import { Routes, Route } from 'react-router-dom'
import { Home, SetupPage, Game, NotFound } from './pages'

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