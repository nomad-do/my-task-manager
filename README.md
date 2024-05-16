# Introduction

Welcome to **My-Task-Manager**, your comprehensive tool for effortlessly managing task priorities. Designed specifically for professionals, this application simplifies the process of prioritizing tasks, enabling you to focus on what truly matters—completing your most important tasks first.

**Key Benefits:**
- **Easy Task Prioritization**: Determine the priority of your tasks with intuitive controls and clear, strategic options.
- **Reduced Decision-Making Time**: Spend less time deciding what to do next and more time doing it.
- **Streamlined Task Entry**: Quickly add new tasks so you can focus on execution without cumbersome processes.
- **Focused Execution**: Concentrate on your highest priority tasks until they are completed, minimizing distractions and boosting productivity.

**My-Task-Manager** is the ideal solution for anyone seeking to organize their tasks efficiently and effectively, making it easier than ever to see important tasks through from start to finish.

## Prerequisites

Before you begin setting up the My-Task-Manager application, ensure you have the following software installed on your system. These tools are necessary to run a MERN stack application and utilize all its features:

### 1. **Node.js**
- **Description**: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and it's necessary for running the server-side portion of your application.
- **Version Required**: Ensure you have Node.js version 14.x or higher installed, as this version provides better performance and enhanced security features.
- **Installation**: Download and install Node.js from [Node.js official website](https://nodejs.org/).

### 2. **MongoDB**
- **Description**: MongoDB is a NoSQL database used to store your application's data. My-Task-Manager uses MongoDB to manage tasks, user settings, and other dynamic information.
- **Version Required**: MongoDB version 4.4 or higher is recommended.
- **Installation**: You can install MongoDB locally or use a cloud service like MongoDB Atlas. Instructions for both can be found on the [MongoDB official website](https://www.mongodb.com/).

### 3. **npm (Node Package Manager)**
- **Description**: npm is the package manager for Node.js and helps manage project dependencies.
- **Installation**: npm is installed automatically with Node.js, but you may want to ensure it's updated to the latest version by running `npm install npm@latest -g` in your terminal.

### 4. **React.js**
- **Description**: React.js is a front-end JavaScript library used for building user interfaces, specifically for single-page applications.
- **Installation**: React will be installed as part of your project dependencies via npm, but having a general understanding of its structure and capabilities is beneficial. More information can be found at [React official documentation](https://reactjs.org/).

### 5. **Git**
- **Description**: Git is a distributed version control system to manage your application's source code history.
- **Installation**: Download and install Git from [Git's official site](https://git-scm.com/). This will be crucial for version control and contribution if you are collaborating with others.

### 6. **A Text Editor or IDE**
- **Description**: A code editor is required to write and edit your code. IDEs like Visual Studio Code also provide additional tools and extensions specifically useful for MERN stack development.
- **Recommendations**: [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), and [Atom](https://atom.io/) are popular choices that support JavaScript and have useful plugins for Node.js and React development.

### 7. **An Internet Connection**
- **Description**: An active internet connection is required to install necessary npm packages, access MongoDB Atlas if using a cloud database, and for various APIs that My-Task-Manager might interact with.

Each of these components plays a crucial role in the setup and execution of your Task Manager application. Make sure to install and configure each one according to the provided instructions before proceeding with the installation of My-Task-Manager.

## Installation Instructions

Follow these steps to install and set up My-Task-Manager on your local development machine.

### Step 1: Install Node.js and npm

1. Download and install Node.js from [Node.js official website](https://nodejs.org/). Installing Node.js will automatically install npm, which is required to manage the project dependencies.
2. Verify the installation by running the following commands in your terminal:
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

2. **Setup MongoDB:**

   **Local Installation:**
   - Download and install MongoDB from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).
   - Follow the on-screen instructions for your operating system to set it up.

   **MongoDB Atlas:**
   - Register or sign into [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster.
   - Follow the instructions to connect your application to the cluster using the provided connection string.

### Step 2: Clone the Repository

1. Open your terminal.
2. Run the following command to clone the project repository.
   ```bash
   git clone https://github.com/nomad-do/my-task-manager.git

3. Change into the project directory.
   ```bash
   cd my-task-manager
   ```

### Step 3: Install Project Dependencies
   ```bash
   npm install
   ```

### Step 4: Set Up Environment Variables
   ```bash
   DB_CONNECTION_STRING=mongodb://localhost/mytaskmanager
   JWT_SECRET=your_secret_key
   API_KEY=your_api_key
   ```

### Step 5: Start the Application
1. To start the backend server, run:
    ```bash
    npm run start
    ```
2. Open a new terminal, navigate to the frontend directory, and start the React application:
    ```bash
    cd frontend
    npm start
    ```

### Step 6: Access the Application
Visit http://localhost:3000 in your web browser to see the application running.

## Usage Guide

### Overview of the Usage Guide

This usage guide will walk you through the key features and functionalities of My-Task-Manager. You'll learn how to create, manage, and track tasks effectively. This section is organized into several subsections, each focusing on a specific aspect of the application.

### Detailed Step-by-Step Instructions

#### Creating a New Task

1. **Access the Task Creation Interface:**
   - Click on the 'Add New Task' button located at the top-left corner of the dashboard.

2. **Fill in Task Details:**
   - Enter new task
   - Score each value by clicking star
   - Click the 'Save Task' button
   - Total score will appear on the task list
   - ![Task Creation Form](path/to/task-creation-form-screenshot.png)
  
3. **Automatic Task Ordering:**
   - If you add new tasks following the above process, 1st priority task will appear at the top of the task list automatically and the other tasks will be listed from top to bottom.
   - ![Task List](path/to/task-List-screenshot.png)

```markdown
To create a new task, click on the 'Add New Task' button located at the top-left corner of the dashboard. Enter new task, score each value by clicking star, and click the 'Save Task' button. The total score will appear on the task list.









