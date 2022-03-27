const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./config/mongo');

const app = express();

app.use(cors());
const port = process.env.PORT || 3001;

//Invoke Routes
app.use('/api',require('./routes/tracks'))

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

dbConnect();