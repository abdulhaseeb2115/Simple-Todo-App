# TODO App

This repository contains a todo application built using React.js for the client-side and Node.js with Express.js for the server-side.

## Folder Structure
The repository is structured into two main folders:

### 1. Client
The `client` folder contains the React.js application, which handles the client-side functionality of the application. It follows the standard structure created by Create React App (CRA) with additional files and folders as needed. 

The key files and folders in the `client` folder include:
- `public/`: Contains the static assets and the HTML file that serves as the entry point for the React application.
- `src/`: Contains the source code of the React application.
- `src/components/`: Contains reusable React components used across different pages.
- `src/screens/`: Contains individual page components that define the views of the application.
- `App.js`: The main component that serves as the entry point for the React application.
- `index.js`: The entry point file that renders the React application into the DOM.

### 2. Server
The `server` folder contains the Node.js and Express.js API that handles server-side functionality and serves as the backend for the application.

The important files and folders in the `server` directory include:
- `controllers/`: Contains the controller files that define the logic for handling different API routes.
- `routes/`: Contains the route files that define the API endpoints and associate them with the corresponding controllers.
- `index.js`: The entry point file for the server, which sets up the Express application and starts the server.

## Getting Started
To run the client and server applications locally, follow the steps below:

1. Clone this repository: `git clone https://github.com/abdulhaseeb2115/test_todo_app.git`.
2. Move into the `client` directory: `cd client`.
3. Install the client-side dependencies: `npm install`.
4. Start the client-side application: `npm start`.
5. Open a new terminal window/tab.
6. Move into the `server` directory: `cd ../server`.
7. Install the server-side dependencies: `npm install`.
8. Start the server-side application: `npm run dev`.

The client-side application should be accessible at `http://localhost:3000`, and the server-side API should be running at `http://localhost:8080`.

### Run Using Docker
Simply run command `docker-compose up` in the root folder.

### Run Tests
To run tests in 

## 1. Client
1. Run command `npx cypress open`.
2. Select the test file in e2e folder.

## 1. Server
1. Run command `npm test`.

