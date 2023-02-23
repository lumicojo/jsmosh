//

// create an array  price ranges with 3  obj
// Each obj should have 4 properties.
//label: '$'
// tooltip:'inexpensive'
//minPerPerson: 0
// maxPerPerson: 0  so the average is between min and max
let priceRanges = [
  {label: '$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10},
  {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
  {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];
// so the average is between min and max values
let restaurants = [
  { averagePerPerson: 5}
]
