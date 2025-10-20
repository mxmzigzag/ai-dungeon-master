import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-12">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The adventure you're looking for doesn't exist in this realm.
          </p>
        </div>

        <div className="flex gap-4">
          <Link 
            to="/" 
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors text-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
