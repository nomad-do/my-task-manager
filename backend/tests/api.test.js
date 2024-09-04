const mongoose = require('mongoose');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const User = require('../models/User');
const Task = require('../models/Task');

describe('API Tests', () => {
    let server;
    let token;

    beforeAll(async () => {
        
        const PORT = process.env.TEST_PORT || 3002; 
        server = app.listen(PORT, () => {
            console.log(`Test server running on port ${PORT}`);
        });

        await User.deleteMany({});
        await Task.deleteMany({});

        const dummyUser = new User({ username: 'testuser', password: 'testpass123' });
        await dummyUser.save();
        token = jwt.sign({ id: dummyUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    });

    afterAll(async () => {
        if (server) {
            await server.close();
            console.log('Test server closed.');
        }
        if (mongoose.connection.readyState === 1) { 
            await mongoose.disconnect();
            console.log('MongoDB connection closed.');
        }
    });    

    afterEach(async () => {
        await Task.deleteMany({});
    });

    it('should respond with a 200 status code and return all tasks', async () => {
        const response = await request(app)
            .get('/api/tasks')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

});
