import { useAppStore } from './stores/useAppStore'

function App() {
  const { count, increment, decrement } = useAppStore()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          React + TypeScript + Vite + Zustand + Tailwind + TanStack Query
        </h1>
        
        {/* Zustand Counter Example */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Zustand Counter</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              onClick={increment}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App