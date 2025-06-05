# Kompas Technical Challenge

This repository contains the Kompas technical challenge with a React frontend and Express API backend.

## Getting Started

### 1. Running the API Server

```bash
# Navigate to the API directory
cd api

# Install dependencies
pnpm install

# Start the database & development server
pnpm docker

# Once the API is running, In a new terminal in api/, run the following commands to setup database
pnpx prisma db push
pnpx prisma generate
pnpx prisma db seed
```

### 2. Running the React Client

```bash
# Navigate to the client directory
cd client

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```
