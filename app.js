const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const storyRoutes = require('./routes/storyRoutes');

const mongoose = require('mongoose');

const newId = new mongoose.Types.ObjectId();
console.log(newId); // This will log a new unique ObjectID


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/stories', storyRoutes);

// ... use other routes ...

// const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/my-story')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// app.get('/', (req, res) => {
//     res.send('Server is up and running!');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

app.listen(3000, () => {
  console.log("Serving on port 3000");
});

// const express = require('express');
// const mongoose = require('mongoose');
// const storyRoutes = require('./routes/storyRoutes');
// const userRoutes = require('./routes/userRoutes');
// // const authRoutes = require('./routes/authRoutes');
// const chapterRoutes = require('./routes/chapterRoutes');
// // ... any other routes or middleware
// const app = express();
// // const authMiddleware = require('./middleware/authMiddleware');

// mongoose.connect('mongodb://localhost:27017/My-Story', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));
// // mongoose.connect('mongodb://127.0.0.1/my-story');
// // mongoose.connect('mongodb://localhost:27017/my-story');

// app.use(express.json()); 

// app.use('/api/stories', storyRoutes);
// app.use('/api/users', userRoutes);
// // app.use('/api/auth', authRoutes);
// app.use('/api/chapters', chapterRoutes);
// // ... any other route handlers

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// const express = require("express");
// const mongoose = require("mongoose");
// const storyRoutes = require("./routes/storyRoutes");
// const chapterRoutes = require('./routes/chapters'); 
// const Chapter = require('./models/chapters');
// const Joi = require("joi");
// const { Schema } = mongoose;
// const { uuid } = require("uuid");
// const bcrypt = require("bcrypt");

// const app = express();
// app.use(express.static("public"));
// app.use(express.json());
// app.use('/chapters', chapterRoutes);
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect("mongodb://127.0.0.1/my-story");

// // Mock database for demonstration purposes
// let users = []; // Replace this with real database logic in a real app

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });

// const newChapter = new Chapter({
//   title: 'Introduction to MongoDB',
//   content: 'Content of the chapter.'
// });

// newChapter.save()
//   .then(doc => {
//       console.log("New chapter created:", doc);
//   })
//   .catch(err => {
//       console.error("Error creating chapter:", err);
//   });

// app.post('/chapters', async (req, res) => {
//     try {
//         const newChapter = new Chapter(req.body);
//         const savedChapter = await newChapter.save();
//         res.status(201).json(savedChapter);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post("/register", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Basic validation
//     if (!username || !password) {
//       return res.status(400).send("Username and password are required");
//     }

//     // Check if user already exists
//     const userExists = users.find((user) => user.username === username);
//     if (userExists) {
//       return res.status(400).send("Username already exists");
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Store the new user
//     const newUser = { username, password: hashedPassword };
//     users.push(newUser); // Replace this with database logic in a real app

//     res.send("Registration successful");
//   } catch (error) {
//     res.status(500).send("Error during registration");
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Basic validation
//     if (!username || !password) {
//       return res.status(400).send("Username and password are required");
//     }

//     // Find user by username
//     const user = users.find((user) => user.username === username);
//     if (!user) {
//       return res.status(400).send("User not found");
//     }

//     // Compare provided password with stored hash
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send("Invalid password");
//     }

//     res.send("Login successful");
//   } catch (error) {
//     res.status(500).send("Error during login");
//   }
// });

// // Use the story routes
// app.use("/stories", storyRoutes);

// // Create (POST) - Add a new item
// app.post('/api/items', (req, res) => {
//   const item = {
//       id: items.length + 1,
//       name: req.body.name
//   };
//   items.push(item);
//   res.status(201).send(item);
// });

// // Read (GET) - Get all items
// app.get('/api/items', (req, res) => {
//   res.send(items);
// });

// // Read (GET) - Get a single item by ID
// app.get('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');
//   res.send(item);
// });

// // Update (PUT) - Update an item
// app.put('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');

//   item.name = req.body.name;
//   res.send(item);
// });

// // Delete (DELETE) - Delete an item
// app.delete('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');

//   const index = items.indexOf(item);
//   items.splice(index, 1);

//   res.send(item);
// });

// app.listen(3000, () => {
//   console.log("Serving on port 3000");
// });
