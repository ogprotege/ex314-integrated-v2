# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js web application that provides an AI chat interface powered by Large Language Models. The application supports:

- Chat functionality with persistent history using local storage and Supabase
- Multiple AI model integrations (Together AI and OpenAI)
- User authentication
- Chat management (create, edit, delete, archive, star)
- Chat export functionality

## Commands

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture

### Frontend

- **Next.js App Router**: The application uses Next.js with the App Router pattern (`app` directory structure).
- **React Context**: State management is handled via the ChatContext (`context/ChatContext.tsx`), which provides chat functionality throughout the app.
- **UI Components**: Located in the `components` directory.
- **TailwindCSS**: Used for styling.

### Backend

- **API Routes**: API endpoints are defined in the `app/api` directory:
  - `/api/together`: Main AI integration using Together AI's API
  - `/api/openai`: Alternative integration using OpenAI's API
  - `/api/langchain`: LangChain integration (if needed)
  - `/api/sendMessage`: Handles message sending
  - `/api/streamMessage`: Handles message streaming (not fully implemented yet)
  - `/api/store-chat`: Stores chat history

### Data Flow

1. User messages are sent to the ChatContext via `sendMessage` function
2. The ChatContext uses ChatService to process the message and get a response
3. ChatService calls the AI provider through ChatAPIClient
4. Messages are stored both in local storage for immediate access and in Supabase for persistence
5. UI is updated with the AI's response

### Authentication

- Simple user ID-based auth with admin capabilities
- User profiles are tracked using local storage and Supabase

### Database

- **Supabase**: Used for server-side persistence of chat messages and potentially user data
- Local Storage: Used for client-side persistence of chats and messages

## External Services

- **Together AI**: Primary LLM provider using a fine-tuned Llama-3.3-70B model
- **OpenAI**: Alternative LLM provider
- **Supabase**: Database and potentially authentication

## Environment Variables

The application expects the following environment variables:

- `TOGETHER_API_KEY`: API key for Together AI
- `OPENAI_API_KEY`: API key for OpenAI (optional)
- `OPENAI_BASE_URL`: Base URL for OpenAI API (optional)
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_SERVICE_KEY`: Supabase service key for server operations