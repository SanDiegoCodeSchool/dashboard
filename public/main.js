fetch('/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(studentData) {
    // TODO: use something like Object.keys(dailyStats)[0] to get values and aggregate

    // figure out all of last week
    // figure out all of this week
  
    //"document.getElementById('id1').style.color = 'red'"

    let aggregatedStudentData = [
      {
        'hoursSpentInEditor': '3',
        'hoursSpentInBrowser': '5',
        'standupsCompleted': true,
        'hoursInClass': '8.5',
        'oneOnOneAverage': '0.9'
      },
      {
        'hoursSpentInEditor': '10',
        'hoursSpentInBrowser': '15',
        'standupsCompleted': true,
        'hoursInClass': '10',
        'oneOnOneAverage': '0.8'
      }
    ]

    parseAndRenderData(aggregatedStudentData);
  }).catch((e) => {console.log("Error fetching data", e)});

function parseAndRenderData(weeklyStats) {
      let prevHoursCoding = parseInt(weeklyStats[0]['hoursSpentInEditor'])
        + parseInt(weeklyStats[0]['hoursSpentInBrowser']);
      document.getElementById('previous-hours-coding').innerHTML=prevHoursCoding;
      
      // This is a boolean that will need to be converted to a string.
      let prevStandups = weeklyStats[0]['standupsCompleted'];
      document.getElementById('previous-standup').innerHTML= "7/7";
      
      let prevClassHours = weeklyStats[0]['hoursInClass'];
      document.getElementById('previous-class-hours').innerHTML=prevClassHours;
      
      let prevOneOnOnes = weeklyStats[0]['oneOnOneAverage'];
      document.getElementById('previous-one-on-one').innerHTML=prevOneOnOnes;

      let currentHoursCoding = parseInt(weeklyStats[1]['hoursSpentInEditor'])
      + parseInt(weeklyStats[1]['hoursSpentInBrowser']);
      document.getElementById('current-hours-coding').innerHTML=currentHoursCoding;
      
      // This is a boolean that will need to be converted to a string.
      let currentStandups = weeklyStats[1]['standupsCompleted'];
      document.getElementById('current-standup').innerHTML= "7/7";
      
      let currentClassHours = weeklyStats[1]['hoursInClass'];
      document.getElementById('current-class-hours').innerHTML=currentClassHours;
      
      let currentOneOnOnes = weeklyStats[1]['oneOnOneAverage'];
      document.getElementById('current-one-on-one').innerHTML=currentOneOnOnes;
}
