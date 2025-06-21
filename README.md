# Chess WebSockets Game

This project is a real-time multiplayer chess game built using **React**, **TypeScript**, **Vite**, **WebSockets**, and **TailwindCSS**. It consists of a **frontend** for the user interface and a **backend** for managing game logic and WebSocket communication.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [Frontend Overview](#frontend-overview)
6. [Backend Overview](#backend-overview)
7. [How It Works](#how-it-works)
8. [Future Enhancements](#future-enhancements)

---

## Features

- Real-time multiplayer chess game.
- WebSocket-based communication for live updates.
- Interactive chessboard with move validation.
- Responsive UI built with TailwindCSS.
- Game state management on the backend.

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **Vite**: For fast development and build tooling.
- **TailwindCSS**: For styling.
- **React Router**: For navigation between screens.

### Backend:
- **Node.js**: For server-side development.
- **WebSocket**: For real-time communication.
- **chess.js**: For chess game logic.

---

## Project Structure

```
chess-websockets-master/
├── backend1/
│   ├── src/
│   │   ├── Game.ts
│   │   ├── GameManager.ts
│   │   ├── index.ts
│   │   ├── messages.ts
│   ├── package.json
│   ├── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── ChessBoard.tsx
│   │   ├── hooks/
│   │   │   ├── useSockets.ts
│   │   ├── screens/
│   │   │   ├── Game.tsx
│   │   │   ├── Landing.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
```

---

## Setup Instructions

### Prerequisites:
- Node.js (v16 or higher)
- npm or yarn

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/chess-websockets.git
   cd chess-websockets-master
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend1
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Start the backend server:
   ```bash
   cd ../backend1
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

6. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Frontend Overview

The frontend is built using **React** and **TypeScript**. It includes the following key components:

- **Landing Screen**: The entry point where users can start a game.
- **Game Screen**: Displays the chessboard and handles game interactions.
- **ChessBoard Component**: Renders the chessboard and manages user moves.
- **Button Component**: A reusable button component styled with TailwindCSS.
- **useSockets Hook**: Manages WebSocket connections for real-time updates.

---

## Backend Overview

The backend is built using **Node.js** and **WebSocket**. It includes the following key components:

- **GameManager**: Manages active games, users, and WebSocket communication.
- **Game**: Handles chess game logic using `chess.js`.
- **WebSocket Server**: Listens for client connections and processes game-related messages.

---

## How It Works

1. **Game Initialization**:
   - A user clicks "Play Online" on the frontend.
   - The backend pairs two users and initializes a game.

2. **Real-Time Updates**:
   - Players make moves on the chessboard.
   - Moves are validated and broadcasted to both players via WebSocket.

3. **Game Over**:
   - The backend detects checkmate or stalemate and notifies both players.

---

## Future Enhancements

- Add user authentication and player profiles.
- Implement a lobby system for matchmaking.
- Add support for game replays and move history.
- Improve UI/UX with animations and better responsiveness.
- Deploy the application to a cloud platform.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Acknowledgments

- [chess.js](https://github.com/jhlywa/chess.js) for chess logic.
- [Vite](https://vitejs.dev/) for fast development tooling.
- [TailwindCSS](https://tailwindcss.com/) for styling.
