const User = require('../models/user');
const bcrypt = require('bcrypt');

const authController = {
    // Register a new user
    async register(req, res) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword });
            await user.save();
            
            res.status(201).send({ user });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Login an existing user
    async login(req, res) {
        try {
            const { password } = req.body;
            const user = await User.findOne({ username });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
            }

            res.send({ user });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Other authentication related methods can go here
};

module.exports = authController;
