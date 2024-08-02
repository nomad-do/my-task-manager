require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager';

const dummyUserConfig = {
  username: 'validUsername',
  password: 'testpassword'  
};

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');

    const hashedPassword = await bcrypt.hash(dummyUserConfig.password, 10);

    const dummyUser = new User({
      username: dummyUserConfig.username,
      password: hashedPassword,
    });

    await dummyUser.save();
    console.log('Dummy user created:', dummyUser);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    mongoose.connection.close();
  });

