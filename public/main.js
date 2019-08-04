fetch('/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const studentData = myJson;
    parseData(studentData);
  }).catch((e) => {console.log("error occured", e)});

function parseData(data) {
    let prevHoursCoding = parseInt(data[0]['07/28/2019']['hoursSpentInEditor'])+parseInt(data[0]['07/28/2019']['hoursSpentInBrowser']);
    document.getElementById('previous-hours-coding').innerHTML=prevHoursCoding;
    let prevStandups = data[0]['07/28/2019']['standupsCompleted'];
    document.getElementById('previous-standup').innerHTML= "7/7";
    let prevClassHours = data[0]['07/28/2019']['hoursInClass'];
    document.getElementById('previous-class-hours').innerHTML=prevClassHours;
    let prevOneOnOnes = data[0]['07/28/2019']['oneOnOneAverage'];
    document.getElementById('previous-one-on-one').innerHTML=prevOneOnOnes;

    let currentHoursCoding = parseInt(data[1]['07/29/2019']['hoursSpentInEditor'])+parseInt(data[1]['07/29/2019']['hoursSpentInBrowser']);
    document.getElementById('current-hours-coding').innerHTML=currentHoursCoding;
    let currentStandups = data[1]['07/29/2019']['standupsCompleted'];
    document.getElementById('current-standup').innerHTML="7/7";
    let currentClassHours = data[1]['07/29/2019']['hoursInClass'];
    document.getElementById('current-class-hours').innerHTML=currentClassHours;
    let currentOneOnOnes = data[1]['07/29/2019']['oneOnOneAverage'];
    document.getElementById('current-one-on-one').innerHTML=currentOneOnOnes;
}
