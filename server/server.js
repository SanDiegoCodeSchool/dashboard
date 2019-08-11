const express = require ('express');
const morgan = require ('morgan');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.get('/data', (req, res) => {
    const mockData = [{
         '07/28/2019': {
           'hoursSpentInEditor': '3',
           'hoursSpentInBrowser': '5',
           'standupsCompleted': true,
           'hoursInClass': '8.5',
           'oneOnOneAverage': '1/1'
         } 
    },{
    '07/29/2019': {
        'hoursSpentInEditor': '19',
        'hoursSpentInBrowser': '24',
        'standupsCompleted': true,
        'hoursInClass': '13',
        'oneOnOneAverage': '2/3'
     }
    }]
    res.status(200).send(mockData);
});
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;

