# My-Task-Manager

## Introduction

Welcome to My-Task-Manager, a powerful and intuitive task management application designed to help you stay organized and productive. This README provides all the necessary information for both general users and developers interested in using or contributing to the project.

## Key Benefits

### Easy Task Prioritization

- **Intuitive Controls:** Determine the priority of your tasks with intuitive controls and clear, strategic options.

### Reduced Decision-Making Time

- **Efficient Workflow:** Spend less time deciding what to do next and more time doing it.

### Streamlined Task Entry

- **Quick Add:** Quickly add new tasks so you can focus on execution without cumbersome processes.

### Focused Execution

- **Minimized Distractions:** Concentrate on your highest priority tasks until they are completed, minimizing distractions and boosting productivity.

### Benefits of Progressive Web App (PWA)

My-Task-Manager is available as a Progressive Web App (PWA), providing an app-like experience and offline functionality.

- **Offline Access:** Continue working even without an internet connection. Any changes you make will be synced once you’re back online.
- **App-Like Experience:** Enjoy smooth navigation, fast load times, and a user-friendly interface without needing to download from an app store.
- **Performance:** PWAs are optimized for fast loading times and efficient resource use.
- **Cross-Platform Compatibility:** Runs on any device, providing a consistent experience across desktops, tablets, and smartphones.
- **Secure and Reliable:** Served over HTTPS and updated automatically to ensure security and reliability.

## User Guide

### Getting Started

#### Creating a New Task

1. **Access the Task Creation Interface:**
   - Click on the 'New Task' button located at the top-right corner of the dashboard.

2. **Fill in Task Details:**
   - Enter new task details.
   - Score each value by clicking stars.
   - Click 'Save Task'.
   - The 1st priority task will appear on the top of the task list automatically.
   - ![Task Creation Form](path/to/task-creation-form-screenshot.png)

3. **Editing and Deleting Tasks:**
   - Locate the task you want to edit or delete.
   - Use the 'Edit' or 'Delete' icons as needed.

4. **Managing Task Lists:**
   - Create, edit, or delete task lists to organize your tasks.

### Using Advanced Features

#### Setting Task Reminders

1. **Access Reminder Settings:**
   - Open the task edit interface and navigate to the 'Reminder' section.
   - Schedule reminders to alert you at specified times.

2. **Configure Reminder:**
   - Set the desired time and frequency for the reminder.
   - Click 'Save' to add the reminder to the task.

#### Collaborating with Team Members

1. **Inviting Members:**
   - Go to the 'Team' section and click 'Invite'.
   - Enter their email addresses and send the invitation.

2. **Assigning Tasks:**
   - Open the task edit interface and select the team member from the 'Assignee' dropdown.

## Developer Guide

### Setting Up the Development Environment

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/my-task-manager.git
   cd my-task-manager














# Introduction

Welcome to **My-Task-Manager**, your comprehensive tool for effortlessly managing task priorities. Designed specifically for professionals, this application simplifies the process of prioritizing tasks, enabling you to focus on what truly matters—completing your most important tasks first.

## Key Benefits

### Easy Task Prioritization

- **Intuitive Controls:** Determine the priority of your tasks with intuitive controls and clear, strategic options.

### Reduced Decision-Making Time

- **Efficient Workflow:** Spend less time deciding what to do next and more time doing it.

### Streamlined Task Entry

- **Quick Add:** Quickly add new tasks so you can focus on execution without cumbersome processes.

### Focused Execution

- **Minimized Distractions:** Concentrate on your highest priority tasks until they are completed, minimizing distractions and boosting productivity.

### Benefits of Progressive Web App (PWA)

My-Task-Manager is also available as a Progressive Web App (PWA). This means you can install it on your device and enjoy a seamless, app-like experience. Here are some of the benefits of using My-Task-Manager as a PWA:

#### Offline Access

- **Continue Working Offline:** You can access your tasks and continue working even without an internet connection. Any changes you make will be synced once you’re back online.

#### App-Like Experience

- **Improved User Experience:** PWAs provide an app-like experience with smooth navigation, fast load times, and a user-friendly interface.
- **No Need for App Store:** Unlike traditional apps, you don’t need to download My-Task-Manager from an app store. Simply add it to your home screen from your browser.

#### Performance

- **Fast Loading:** PWAs are optimized for fast loading times, ensuring a quick and responsive experience.
- **Efficient Resource Use:** They use caching strategies to minimize resource use and improve performance.

#### Cross-Platform Compatibility

- **Runs on Any Device:** Whether you’re using a desktop, tablet, or smartphone, the PWA adapts to your device’s screen size and resolution.
- **Consistent Experience:** Enjoy a consistent user experience across different devices and operating systems.

#### Secure and Reliable

- **HTTPS:** PWAs are served over HTTPS, ensuring a secure connection and protecting your data.
- **Automatic Updates:** You’ll always have the latest version without needing to manually update the app.

### How to Install My-Task-Manager as a PWA

1. **Open My-Task-Manager in your browser.**
2. **Click on the install prompt:**
   - On Chrome, click the install icon in the address bar or select "Add to Home Screen" from the menu.
   - On Safari, click the share button and select "Add to Home Screen."

3. **Follow the instructions:**
   - Confirm the installation to add My-Task-Manager to your device.

### Enjoy the Benefits

By installing My-Task-Manager as a PWA, you can take advantage of these benefits and enhance your task management experience.

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










