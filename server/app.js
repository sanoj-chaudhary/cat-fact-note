require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoute = require('./routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));
app.use('/api/notes', noteRoute);
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));