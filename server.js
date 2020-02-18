const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

//Body-parser
app.use(bodyParser.json());

//DB config
const db = require('./config/keys.js').mongoURI;


//Connect to Mongo
// useNewUrlParser: true,useUnifiedTopology: true to avoid depreciation errors
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    // use routes
    app.use('/api/items',items);

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server started on port ${port}`));


