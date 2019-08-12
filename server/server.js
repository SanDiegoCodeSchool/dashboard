const express = require ('express');
const morgan = require ('morgan');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.get('/data', (req, res) => {
    const mockData = {
         '07/28/2019': {
           'hoursSpentInEditor': '3',
           'hoursSpentInBrowser': '5',
           'standupsCompleted': true,
           'hoursInClass': '8.5',
           'oneOnOneAverage': '0.9'
         }, 
         '07/29/2019': {
            'hoursSpentInEditor': '19',
            'hoursSpentInBrowser': '24',
            'standupsCompleted': true,
            'hoursInClass': '13',
            'oneOnOneAverage': '1'
         }, '07/30/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '07/31/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },'08/01/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '08/02/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },'08/03/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '08/04/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },'08/05/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '08/06/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },'08/07/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '08/08/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },'08/09/2019': {
            'hoursSpentInEditor': '3',
            'hoursSpentInBrowser': '5',
            'standupsCompleted': true,
            'hoursInClass': '8.5',
            'oneOnOneAverage': '0.9'
          }, 
          '08/10/2019': {
             'hoursSpentInEditor': '19',
             'hoursSpentInBrowser': '24',
             'standupsCompleted': true,
             'hoursInClass': '13',
             'oneOnOneAverage': '1'
          },
    }
    res.status(200).send(mockData);
});
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;

