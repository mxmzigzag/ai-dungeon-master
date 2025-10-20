# AI Dungeon Master Backend

Express.js backend with TypeScript, OpenAI integration, and CORS support.

## Features

- 🚀 Express.js server with TypeScript
- 🤖 OpenAI API integration
- 🌐 CORS configuration for frontend communication
- 📡 Axios for external API calls
- 🔧 Environment variable configuration
- 🏥 Health check endpoints

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp env.example .env
```

3. Configure your environment variables in `.env`:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Development

Start the development server:
```bash
npm run dev
```

Start with auto-reload:
```bash
npm run dev:watch
```

## Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### OpenAI Integration
- `POST /api/openai/dummy-request` - Make a dummy request to OpenAI
- `GET /api/openai/test-external` - Test external API call with axios
- `GET /api/openai/health` - OpenAI service health check

## Example Usage

### Dummy OpenAI Request
```bash
curl -X POST http://localhost:3001/api/openai/dummy-request \
  -H "Content-Type: application/json" \
  -d '{"message": "Create a fantasy character"}'
```

### Test External API
```bash
curl http://localhost:3001/api/openai/test-external
```

## CORS Configuration

The server is configured to allow requests from `http://localhost:5173` (Vite default port). You can modify the `CORS_ORIGIN` environment variable to change this.

## Error Handling

The server includes comprehensive error handling for:
- OpenAI API errors (quota, invalid key, etc.)
- External API failures
- General server errors
