const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 1000;
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port: ${port}`));
