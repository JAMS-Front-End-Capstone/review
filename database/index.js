const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/practice';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
