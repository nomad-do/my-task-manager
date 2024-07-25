require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');
    
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash('testpassword', 10);
    
    const dummyUser = new User({
      username: 'validUsername', // Change to your desired username
      password: hashedPassword, // Save the hashed password
    });
    
    await dummyUser.save();
    console.log('Dummy user created:', dummyUser);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    mongoose.connection.close();
  });
