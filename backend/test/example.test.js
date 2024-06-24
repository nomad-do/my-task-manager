const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app'); // Adjust the path to point to app.js correctly
const User = require('../models/user'); // Adjust the path to your user model

describe('User Profile API Tests', () => {

  beforeEach(async () => {
    await User.deleteMany({}); // Clear users before each test
  });

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/test/users')
      .send({
        username: 'newuser',
        password: 'password123'
      });
    console.log(response.body); // Debug print response body
    expect(response.statusCode).toBe(201);
    expect(response.body.username).toBe('newuser');
    const user = await User.findOne({ username: 'newuser' });
    console.log(user); // Debug print user from database
    expect(user).not.toBeNull();
    expect(user.username).toBe('newuser');
    const isMatch = await bcrypt.compare('password123', user.password);
    expect(isMatch).toBe(true);
  });

  it('should fetch a user profile', async () => {
    const user = new User({
      username: 'testuser',
      password: 'password'
    });
    await user.save();

    const response = await request(app)
      .get('/api/test/users/testuser');
    expect(response.statusCode).toBe(200);
    expect(response.body.username).toBe('testuser');
  });

  it('should update a user profile', async () => {
    const user = new User({
      username: 'testuser',
      password: 'password'
    });
    await user.save();

    const response = await request(app)
      .put('/api/test/users/testuser')
      .send({
        password: 'newpassword'
      });
    expect(response.statusCode).toBe(200);
    const updatedUser = await User.findOne({ username: 'testuser' });
    const isMatch = await bcrypt.compare('newpassword', updatedUser.password);
    expect(isMatch).toBe(true);
  });

  it('should delete a user profile', async () => {
    const user = new User({
      username: 'testuser',
      password: 'password'
    });
    await user.save();

    const response = await request(app)
      .delete('/api/test/users/testuser');
    expect(response.statusCode).toBe(204);
    const deletedUser = await User.findOne({ username: 'testuser' });
    expect(deletedUser).toBeNull();
  });

});
