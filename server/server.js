const express = require ('express');
const morgan = require ('morgan');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;
