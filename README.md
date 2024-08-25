# My Task Manager

Welcome to My-Task-Manager, a comprehensive tool designed to help you effortlessly manage and prioritize your tasks. Whether you're a professional or a student, this application simplifies the task management process, enabling you to focus on what truly matters—completing your most important tasks first.

## Key Benefits

### Easy Task Prioritization
- **Intuitive Controls**: Easily determine the priority of your tasks with user-friendly controls and clear options.

### Reduced Decision-Making Time
- **Efficient Workflow**: Spend less time deciding what to do next and more time doing it.

### Streamlined Task Entry
- **Quick Add**: Quickly add new tasks without cumbersome processes, allowing you to focus on execution.

### Focused Execution
- **Minimized Distractions**: Stay on track by concentrating on your highest-priority tasks until they are completed.

## Progressive Web App (PWA)

My-Task-Manager is also available as a Progressive Web App (PWA), providing a seamless, app-like experience on any device.

### Offline Access
- **Continue Working Offline**: Access your tasks and continue working even without an internet connection. Changes sync automatically once you're back online.

### App-Like Experience
- **Improved UX**: Enjoy smooth navigation, fast load times, and a user-friendly interface.

### Easy Installation
- **No App Store Needed**: Install directly from your browser to your home screen.

### Performance
- **Fast Loading**: PWAs are optimized for speed and performance.
  
- **Efficient Resource Use**: Uses caching strategies to minimize resource use and improve performance.

### Cross-Platform Compatibility
- **Runs on Any Device**: Adapts to your device’s screen size, providing a consistent experience across desktops, tablets, and smartphones.

### Secure and Reliable
- **HTTPS**: Served over HTTPS to ensure a secure connection.
  
- **Automatic Updates**: Always have the latest version without manual updates.

## How to Install My-Task-Manager as a PWA

1. **Open My-Task-Manager in your browser.**
2. **Click the install prompt:**
   - On Chrome, click the install icon in the address bar or select "Add to Home Screen" from the menu.
   - On Safari, click the share button and select "Add to Home Screen."
3. **Follow the instructions** to confirm the installation.

## Prerequisites

Before setting up My-Task-Manager, ensure you have the following installed on your system:

1. **Node.js**: Version 14.x or higher.
2. **MongoDB**: Version 4.4 or higher, either locally or via MongoDB Atlas.
3. **npm**: Up-to-date for managing project dependencies.
4. **React.js**: For building the frontend interface.
5. **Git**: To manage source code.
6. **Text Editor or IDE**: Recommended: Visual Studio Code, Sublime Text, or Atom.
7. **Internet Connection**: For installing npm packages and accessing cloud services.

## Installation Instructions

Follow these steps to set up My-Task-Manager on your local machine:

### Step 1: Install Node.js, npm, and MongoDB

1. **Node.js and npm**:
   - Install from the [Node.js official website](https://nodejs.org/).
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **MongoDB**:
   - **Local**: Install from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).
   - **Atlas**: Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Step 2: Clone the Repository

```bash
git clone https://github.com/nomad-do/my-task-manager.git
cd my-task-manager
```

### Step 3: Install Project Dependencies

```bash
npm install
```

### Step 4: Set Up Environment Variables

Create a `.env` file in the project root with the following:

```bash
DB_CONNECTION_STRING=mongodb://localhost/your-database
JWT_SECRET=your_secret_key
API_KEY=your_api_key
```

### Step 5: Start the Application

**Backend Server:**

```bash
cd backend
npm start
```

**Frontend Application:**

Open a new terminal, navigate to the frontend directory, and start the React application:

```bash
cd frontend
npm start
```

### Step 6: Access the Application

Visit `http://localhost:3001` in your browser to see the application running.

## Usage Guide

### Adding a New Task

1. Add New Task on the Task Manager.
2. Assign urgency, importance, and effort scores.
3. Click 'Save Task' to add it to your list.

### Editing a Task

1. Click 'Edit' next to the task.
2. Modify urgency, importance, and effort scores.
3. Click 'Save Task' to update it.

### Deleting a Task

1. Click 'Delete' next to the task.
2. Confirm the deletion.

### Automatic Task Ordering

Tasks are automatically ordered by priority, with the highest priority tasks at the top.

## Testing

We use Jest for testing API endpoints. To run tests:

1. **Install Testing Dependencies**:

    ```bash
    npm install --save-dev jest
    ```

2. **Run Tests**:

    ```bash
    npm test
    ```

## License

This project is licensed under the MIT License.

