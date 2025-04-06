const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotelsDB';

// Connect to MongoDB
mongoose.connect(mongoURL);

// Get default connection
const db = mongoose.connection;

// Connection events
db.on('connected', () => {
  console.log('✅ MongoDB connected successfully!');
});

db.on('disconnected', () => {
  console.log('🔌 MongoDB disconnected!');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Export the connection
module.exports = db;
