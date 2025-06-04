# API Service

This is the API service for the Kompas coding challenge.

## Quick Start

### Local Development (No Docker)

```bash
# Install dependencies
pnpm install

# Start development server with hot-reloading
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Docker Development

```bash
# Start the API in Docker with hot-reloading
pnpm docker

# Stop the Docker container
pnpm docker:down
```

## Docker Setup

The API service is containerized using Docker for easy local development with hot-reloading.

- The Docker setup mounts your local code into the container
- Any changes you make to the code will automatically restart the server
- The API runs on port 3001

## API Endpoints

- `GET /` - Root endpoint, returns a status message
- `GET /leases` - Get all leases
