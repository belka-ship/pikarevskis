# Overview

This is a full-stack TypeScript application built with React and Express, designed as a personal portfolio/profile website. The application showcases a professional's experience, services, and community involvement through a clean, modern interface. It uses a monorepo structure with shared code between frontend and backend, and includes comprehensive UI components from shadcn/ui for consistent design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Hot reload with Vite integration and comprehensive logging middleware

## Project Structure
- **Monorepo Layout**: Shared types and schemas in `/shared`, frontend in `/client`, backend in `/server`
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development Setup**: Single command development with concurrent frontend/backend serving

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts` using Drizzle and Zod
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

## Authentication & Security
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Type Safety**: End-to-end TypeScript with shared types between client and server
- **Input Validation**: Zod schemas for runtime type checking and validation

## Development Workflow
- **Hot Reload**: Vite dev server with Express middleware integration
- **TypeScript**: Strict type checking across the entire application
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Logging**: Structured logging for API requests with response time tracking

# External Dependencies

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Frontend Libraries
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library with consistent design system
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Feather-inspired icon library
- **React Icons**: Popular icon library with brand icons

## Development & Build Tools
- **Vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for backend compilation
- **TSX**: TypeScript execution engine for development
- **Replit Plugins**: Integration with Replit development environment

## State Management & API
- **TanStack Query**: Powerful data synchronization for React applications
- **Wouter**: Minimalist routing library for React
- **date-fns**: Modern JavaScript date utility library

## Validation & Forms
- **Zod**: TypeScript-first schema validation library
- **React Hook Form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and Zod