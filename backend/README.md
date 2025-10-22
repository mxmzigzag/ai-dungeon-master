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

2. Set up environment files:
```bash
# For development
npm run setup:env

# For production
npm run setup:prod
```

3. Configure your environment variables:
   - **Development**: Edit `.rc.env` file
   - **Production**: Edit `.prod.env` file

### Environment Files
- `.rc.env` - Development environment (gitignored)
- `.prod.env` - Production environment (gitignored)
- `env.example` - Template file (committed to git)

The server automatically loads the correct environment file based on `NODE_ENV`:
- Development: Uses `.rc.env`
- Production: Uses `.prod.env`

## Development

Start the development server (uses `.rc.env`):
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

Start the production server (uses `.prod.env`):
```bash
npm start
```

Start production server in development mode (uses `.rc.env`):
```bash
npm run start:dev
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
