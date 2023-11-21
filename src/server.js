const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const sub = express();
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    contactNumber: String,
  });  
  app.post('/signup', async (req, res) => {
    const {
      username,
      email,
      password,
      contactNumber,
    } = req.body;

    try {
      if ( !username || !email || !password || !contactNumber ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newUser = new User({
        username,
        email,
        password,
        contactNumber,
      });
      await newUser.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  const billingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    country: String,
    state: String,
    pincode: String,
    gender: String,
    agree: Boolean,
  });
  
  const Billing = mongoose.model('Billing', billingSchema);
  
  app.post('/api/billing', async (req, res) => {
    try {
      const { firstName, lastName, email, address, country, state, pincode, gender, agree } = req.body;
  
      const billingData = new Billing({
        firstName,
        lastName,
        email,
        address,
        country,
        state,
        pincode,
        gender,
        agree,
      });
  
      await billingData.save();
  
      res.status(201).json({ message: 'Billing information stored successfully' });
    } catch (error) {
      console.error('Error storing billing information:', error);
      res.status(500).json({ message: 'An error occurred while storing billing information' });
    }
  });
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create and send a JWT token for successful login
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // You can adjust the token expiration time
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  app.get('/loginform', (req, res)=> {
  });
  app.get('/signupform', (req, res)=> {
  });
  app.get('/',(req, res)=> {
  });
  app.get('/Pay',(req, res)=> {
  });
  app.get('/contact',(req, res)=> {
  });
  app.get('/Storelist',(req, res)=> {
  });
  app.get('/About',(req, res)=> {
  });
  app.get('/Cloth',(req, res)=> {
  });

  app.get('/getUserDetails', async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }); 