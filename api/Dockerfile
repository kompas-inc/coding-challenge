FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Expose the API port
EXPOSE 3001

# Start the development server with hot-reloading
CMD ["pnpm", "dev"]
