const jwt = require('jsonwebtoken');

// ...

async login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: 'Invalid login credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
},

async register(req, res) {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        
        // Send back only necessary data
        res.status(201).send({ userId: user._id, username: user.username });
    } catch (error) {
        res.status(400).send(error);
    }
},
