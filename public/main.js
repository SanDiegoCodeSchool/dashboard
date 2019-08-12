fetch('/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(studentData) {
    let aggregatedStudentData = parseStudentData(studentData);
    renderData(aggregatedStudentData);
  })
  .catch(e => {
    console.log('Error fetching data', e);
  });

function parseStudentData(studentData) {
  let daysDataArray = Object.values(studentData);

  let hoursSpentCodingCurrent = 0;
  let hoursSpentCodingPrevious = 0;
  let totalStandupsCompleted = 0;
  let totalStandups = daysDataArray.length;
  let totalOneOnOnes = 0;
  let hoursInClassCurrent = 0;
  let hoursInClassPrevious = 0;

  let currentWeek = daysDataArray.slice(daysDataArray.length - 7);

  for (let val in currentWeek) {
    hoursSpentCodingCurrent +=
      parseInt(currentWeek[val].hoursSpentInEditor) +
      parseInt(currentWeek[val].hoursSpentInBrowser);
    hoursInClassCurrent += parseInt(currentWeek[val].hoursInClass);
    if (currentWeek[val].standupsCompleted) {
      totalStandupsCompleted++;
    }
  }

  let previousWeek = daysDataArray.slice(
    daysDataArray.length - 14,
    daysDataArray.length - 7
  );

  for (let val in previousWeek) {
    hoursSpentCodingPrevious +=
      parseInt(previousWeek[val].hoursSpentInEditor) +
      parseInt(previousWeek[val].hoursSpentInBrowser);
    hoursInClassPrevious += parseInt(previousWeek[val].hoursInClass);
    if (previousWeek[val].standupsCompleted) {
      totalStandupsCompleted++;
    }
  }

  let restOfDays = daysDataArray.slice(0, daysDataArray.length - 14);
  for (let val in restOfDays) {
    if (restOfDays[val].standupsCompleted) {
      totalStandupsCompleted++;
    }
  }

  let aggregatedData = {
    hoursSpentCodingCurrent,
    hoursSpentCodingPrevious,
    totalStandupsCompleted,
    totalStandups,
    totalOneOnOnes,
    hoursInClassCurrent,
    hoursInClassPrevious
  };
  return aggregatedData;
}

function renderData(aggregatedStudentData) {
  
  let { hoursSpentCodingPrevious,
    hoursInClassPrevious,
    hoursSpentCodingCurrent,
    hoursInClassCurrent,
    totalStandupsCompleted,
    totalStandups,
    totalOneOnOnes
  } = aggregatedStudentData;
  
  document.getElementById('hours-spent-coding-previous').innerHTML = hoursSpentCodingPrevious;
  document.getElementById('hours-in-class-previous').innerHTML = hoursInClassPrevious;

  document.getElementById('hours-spent-coding-current').innerHTML = hoursSpentCodingCurrent;
  document.getElementById('hours-in-class-current').innerHTML = hoursInClassCurrent;

  document.getElementById('total-standups').innerHTML = `${totalStandupsCompleted}/${totalStandups}`;
  document.getElementById('total-one-on-ones').innerHTML = `0/${totalOneOnOnes}`;

}
