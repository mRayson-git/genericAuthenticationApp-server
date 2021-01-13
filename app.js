const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport)

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'Think',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/auth', require('./routes/api/v1/auth'));
app.get('/', (req, res) => {
    res.send('Hello')
});


const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, console.log(`Server running on port ${PORT}`));