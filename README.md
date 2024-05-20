# My Task Manager

Welcome to my-task-manager, your comprehensive tool for effortlessly managing task priorities. Designed specifically for professionals, this application simplifies the process of prioritizing tasks, enabling you to focus on what truly matters—completing your most important tasks first.

## Key Benefits

### Easy Task Prioritization

- **Intuitive Controls**: Determine the priority of your tasks with intuitive controls and clear, strategic options.

### Reduced Decision-Making Time

- **Efficient Workflow**: Spend less time deciding what to do next and more time doing it.

### Streamlined Task Entry

- **Quick Add**: Quickly add new tasks so you can focus on execution without cumbersome processes.

### Focused Execution

- **Minimized Distractions**: Concentrate on your highest priority tasks until they are completed, minimizing distractions and boosting productivity.

## Benefits of Progressive Web App (PWA)

My-Task-Manager is also available as a Progressive Web App (PWA). This means you can install it on your device and enjoy a seamless, app-like experience.

### Offline Access

- **Continue Working Offline**: You can access your tasks and continue working even without an internet connection. Any changes you make will be synced once you’re back online.

### App-Like Experience

- **Improved User Experience**: PWAs provide an app-like experience with smooth navigation, fast load times, and a user-friendly interface.

### No Need for App Store

- **Install from Browser**: Simply add it to your home screen from your browser.

### Performance

- **Fast Loading**: PWAs are optimized for fast loading times.
- **Efficient Resource Use**: They use caching strategies to minimize resource use and improve performance.

### Cross-Platform Compatibility

- **Runs on Any Device**: Whether you’re using a desktop, tablet, or smartphone, the PWA adapts to your device’s screen size and resolution.
- **Consistent Experience**: Enjoy a consistent user experience across different devices and operating systems.

### Secure and Reliable

- **HTTPS**: PWAs are served over HTTPS, ensuring a secure connection and protecting your data.
- **Automatic Updates**: You’ll always have the latest version without needing to manually update the app.

## How to Install My-Task-Manager as a PWA

1. **Open my-task=manager in your browser.**
2. **Click on the install prompt:**
   - On Chrome, click the install icon in the address bar or select "Add to Home Screen" from the menu.
   - On Safari, click the share button and select "Add to Home Screen."
3. **Follow the instructions:**
   - Confirm the installation to add My-Task-Manager to your device.

## Prerequisites

Before you begin setting up the my-task-manager application, ensure you have the following software installed on your system:

1. **Node.js**: Node.js is a JavaScript runtime necessary for running the server-side portion of your application. Ensure you have version 14.x or higher installed.
2. **MongoDB**: MongoDB is a NoSQL database used to store your application's data. Version 4.4 or higher is recommended.
3. **npm (Node Package Manager)**: npm helps manage project dependencies. Ensure it's updated to the latest version.
4. **React.js**: React.js is a front-end JavaScript library used for building user interfaces.
5. **Git**: Git is a distributed version control system to manage your application's source code history.
6. **A Text Editor or IDE**: Tools like Visual Studio Code, Sublime Text, or Atom are recommended for development.
7. **An Internet Connection**: Necessary for installing npm packages and accessing cloud services.

## Installation Instructions

Follow these steps to install and set up my-task-machine on your local development machine.

### Step 1: Install Node.js, npm, and MongoDB

- **Node.js and npm**: Download and install from the [Node.js official website](https://nodejs.org/). Verify the installation:
  ```bash
  node --version
  npm --version

### Step 1: Install Node.js, npm, and MongoDB

1. **Install Node.js and npm:**
   - Download and install Node.js from the [Node.js official website](https://nodejs.org/). 
     This installation will also automatically install npm, necessary for managing project dependencies.
   - Verify the installation by running the following commands in your command line:
     ```bash
     node --version
     npm --version
     ```

2. **MongoDB:**
   **Local Installation:**
   - Download from the[MongoDB Download Center](https://www.mongodb.com/try/download/community).
   **MongoDB Atlas:**
   - Register and create a new cluster on[MongoDB Atlas](https://www.mongodb.com/cloud/atlas).   - 
  
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
Create a .env file in the root of the project and add the following:
   ```bash
   DB_CONNECTION_STRING=mongodb://localhost/my-task-manager
   JWT_SECRET=your_secret_key
   API_KEY=your_api_key
   ```

### Step 5: Start the Application
 **Backend server:**
1. To start the backend server, run:
    ```bash
    npm run start
    ```
**Frontend application:**
2. Open a new terminal, navigate to the frontend directory, and start the React application:
    ```bash
    cd frontend
    npm start
    ```

### Step 6: Access the Application
Visit http://localhost:3000 in your web browser to see the application running.

## Usage Guide

### Creating a New Task

#### Access the Task Creation Interface:

- Click on the 'Add New Task' button located on the dashboard.

#### Fill in Task Details:

- Enter the task name.
- Score each value (urgency/importance/effort) by clicking star.
- Click the 'Save Task' button to add the task to your list.

### Viewing Tasks

#### Task List:

- Access the list of tasks on the dashboard.
- Tasks are automatically ordered by priority, with the highest priority tasks at the top.

### Editing a Task

#### Access the Edit Interface:

- Click on the task you want to edit.
- Modify the task details and priority.
- Save the changes.

### Deleting a Task

#### Remove a Task:

- Click the delete icon next to the task you want to remove.
- Confirm the deletion in the popup dialog.

### Completing a Task

### Automatic Task Ordering

#### Prioritize Tasks:

- Understand that tasks will be automatically ordered by priority.
- The highest priority tasks appear at the top of the list.

### Using Filters and Search

#### Filter Tasks:

- Use filters to view tasks based on their status (e.g., all, active, completed).

#### Search Tasks:

- Use the search bar to find specific tasks by name or description.

## License

This project is licensed under the MIT License.
