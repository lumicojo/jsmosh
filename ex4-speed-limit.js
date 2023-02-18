// speed limit = 70
// for every 5 more over limit  = 1point
// need to use Math.floor(1.3)
// 12 points = suspended


// checkSpeed(180);

// function checkSpeed(speed) {
//   const speedLimit = 70
//   const kmPerPoint = 5
//   if (speed < speedLimit + kmPerPoint)
//     console.log('ok');
//   else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points > 12)
//       console.log('License suspended');
//       else
//       console.log('Points', points);
//     }
// }


checkSpeed(90);

function checkSpeed(speed) {
  const speedLimit = 70
  const kmPerPoint = 5
  if (speed < speedLimit + kmPerPoint){
    console.log('ok');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points > 12)
    console.log('License suspended');
  else
    console.log('Points', points);
}

