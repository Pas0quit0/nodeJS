const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Init app
const app = express();
app.use(express.json());

//initi db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });

requireDir('./src/models');

// const Product = mongoose.model('Product');

// Routes
app.use('/api', require("./src/routes"));

app.listen(3001);

