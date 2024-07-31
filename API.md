# API Documentation

## Overview

This document provides an overview of the API endpoints for the My Task Manager application.

## Getting Started

To start using the API, you will need to register and obtain a Bearer token.

## Authentication

### Register

- **URL**: `/auth/register`
- **Method**: `POST`
- **Body**:

    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

#### Responses:

- **201 Created**:

    ```json
    {
      "message": "User created successfully."
    }
    ```

- **400 Bad Request**:
  
  When username or password is missing:

    ```json
    {
      "error": "Username and password are required."
    }
    ```

  When the username is already taken:

    ```json
    {
      "error": "Username is already taken."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "error": "An error occurred during registration."
    }
    ```

### Login

- **URL**: `/auth/login`
- **Method**: `POST`
- **Request Body**:

    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "message": "Login successful",
      "token": "jwt_token_here"
    }
    ```

- **400 Bad Request**:

    ```json
    {
      "error": "Username and password are required."
    }
    ```

- **401 Unauthorized**:
  
  When the user is not found:

    ```json
    {
      "error": "User not found."
    }
    ```

  When the password is invalid:

    ```json
    {
      "error": "Invalid password."
    }
    ```

## Users

### Get User Profile

- **URL**: `/api/users/profile`
- **Method**: `GET`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "_id": "60c72b2f4f1a2c001c8d4c7a",
      "username": "testuser"
    }
    ```

- **404 Not Found**:

    ```json
    {
      "message": "User not found."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "message": "An error occurred while fetching the user profile."
    }
    ```

### Update User Profile

- **URL**: `/api/users/profile`
- **Method**: `PUT`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

- **Request Body**:

    ```json
    {
      "username": "updateduser",
      "password": "newpassword123"
    }
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "message": "User profile updated successfully."
    }
    ```

- **404 Not Found**:

    ```json
    {
      "message": "User not found."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "message": "An error occurred while updating the user profile."
    }
    ```

## Tasks

### Get Tasks

- **URL**: `/api/tasks`
- **Method**: `GET`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "tasks": [
        {
          "_id": "60c72b2f4f1a2c001c8d4c7a",
          "text": "New Task",
          "completed": false,
          "user": "60c72aaf4f1a2c001c8d4c79"
        }
      ]
    }
    ```

### Create Task

- **URL**: `/api/tasks`
- **Method**: `POST`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

- **Body**:

    ```json
    {
      "title": "Sample Task",
      "urgency": 5,
      "importance": 3,
      "effort": 1,
      "priority": 9,
      "user": "664eec3fe2179f059ed2f365"
    }
    ```

#### Responses:

- **201 Created**:

    ```json
    {
      "title": "Sample Task",
      "urgency": 5,
      "importance": 3,
      "effort": 1,
      "priority": 9,
      "user": "664eec3fe2179f059ed2f365"
    }
    ```

- **400 Bad Request**:

    ```json
    {
      "message": "All fields must be filled: title, urgency, importance, and effort."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "message": "An error occurred during task creation."
    }
    ```

### Update Task

- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

- **Request Body**:

    ```json
    {
      "title": "Updated Task Title",
      "urgency": 4,
      "importance": 2,
      "effort": 3
    }
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "title": "Updated Task Title",
      "urgency": 4,
      "importance": 2,
      "effort": 3,
      "priority": 9,
      "user": "664eec3fe2179f059ed2f365"
    }
    ```

- **404 Not Found**:

    ```json
    {
      "message": "Task not found."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "message": "An error occurred during task update."
    }
    ```

### Delete Task

- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
- **Headers**:

    ```http
    Authorization: Bearer <token>
    ```

#### Responses:

- **200 OK**:

    ```json
    {
      "message": "Task deleted successfully."
    }
    ```

- **404 Not Found**:

    ```json
    {
      "message": "Task not found."
    }
    ```

- **500 Internal Server Error**:

    ```json
    {
      "message": "An error occurred during task deletion."
    }
    ```

