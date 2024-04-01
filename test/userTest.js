// test/userTest.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('..app/app'); // Import your server app
const logger = require('../config/logger'); // Import the Winston logger

chai.use(chaiHttp);
const { expect } = chai;

describe('User Registration and Login', () => {
  describe('User Registration', () => {
    it('should register a new user', (done) => {
      chai.request(server)
        .post('/register') // Adjust the endpoint as necessary
        .send({ username: 'testuser', password: 'testpass' })
        .end((err, res) => {
          logger.info(`Test: User Registration - ${res.status}`, res.body);
          expect(res).to.have.status(200);
          // Additional assertions as needed
          done();
        });
    });
  });

  describe('User Login', () => {
    it('should login an existing user', (done) => {
      chai.request(server)
        .post('/login') // Adjust the endpoint as necessary
        .send({ username: 'testuser', password: 'testpass' })
        .end((err, res) => {
          logger.info(`Test: User Login - ${res.status}`, res.body);
          expect(res).to.have.status(200);
          // Additional assertions as needed
          done();
        });
    });
  });
});
