const express = require('express');
const logger = require('morgan');
// const mongoose = require('mongoose');

const PORT = 5000;
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/fitness', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// app.use(require('./routes/api'));
app.use(require('./routes/view'));

// adding process.env.PORT here solved heroku error H10
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});