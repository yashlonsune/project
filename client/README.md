# Artisan Leather - Client

This is the frontend for the Artisan Leather e-commerce website, built with React and Vite.

## Features

- Responsive design that works on all devices
- Product browsing with filtering capabilities
- User authentication (signup and signin)
- Shopping cart functionality
- User profile management

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router Dom
- Axios for API requests
- Context API for state management

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Create a `.env` file in the client directory based on `.env.example`:

```
VITE_API_URL=http://localhost:5000
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to Vercel or any other static hosting service.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the following configuration:
   - Framework preset: Vite
   - Build command: npm run build
   - Output directory: dist
   - Install command: npm install
4. Add environment variables in the Vercel dashboard (VITE_API_URL pointing to your deployed backend)
5. Deploy

## Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components
  - `/contexts`: React context providers
  - `/pages`: Page components
  - `/utils`: Utility functions and constants
  - `App.tsx`: Main application component
  - `main.tsx`: Application entry point

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build locally