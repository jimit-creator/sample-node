# Sample Node.js TypeScript Project

This is a Node.js application built with TypeScript, Express, and Docker support.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Docker and Docker Compose (for containerized deployment)
- Git

## Local Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd sample
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=3000
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev`: Start the development server with hot-reload
- `npm run build`: Build the TypeScript project
- `npm start`: Start the production server
- `npm test`: Run tests

## Docker Deployment

### Using Docker Compose (Recommended)

1. Build and start the containers:
```bash
docker-compose up --build
```

2. To run in detached mode:
```bash
docker-compose up -d
```

3. To stop the containers:
```bash
docker-compose down
```

### Using Docker Directly

1. Build the Docker image:
```bash
docker build -t sample-app .
```

2. Run the container:
```bash
docker run -p 3000:3000 sample-app
```

## Project Structure

```
sample/
├── src/              # Source files
├── dist/             # Compiled JavaScript files
├── node_modules/     # Dependencies
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── package.json      # Project metadata and dependencies
├── tsconfig.json     # TypeScript configuration
└── .env             # Environment variables (create this file)
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
```

## Dependencies

Main dependencies:
- Express.js - Web framework
- TypeScript - Programming language
- CORS - Cross-Origin Resource Sharing
- dotenv - Environment variable management
- express-validator - Input validation

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the repository. 