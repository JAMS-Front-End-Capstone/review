
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/practice';

const db = mongoose.connect(mongoUri);

module.exports = db;