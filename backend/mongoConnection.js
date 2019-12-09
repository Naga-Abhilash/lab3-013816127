var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:ABnaga1997@@grubhub-opt6f.mongodb.net/grubhub?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 100, 'useCreateIndex': true }, (err) => {
  if (err) {
    console.log("Could not connect to database", err)
    res.status(500).end("Could not connect to database" + err);
  }
  console.log("mongoose server running");
});

module.exports = { mongoose };