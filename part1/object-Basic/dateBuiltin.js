// to create a date you can pass numbers
const now = new Date();
const date1 = new Date('May 11 2018 09:00')
const date2 = new Date(2018, 4, 11, 9, 0);
// 0 represent january and 11 december
now.setFullYear(2017);

// in console you write:
// now.toDateString()  = 'Thu May 11 2017'
//now.toTimeString() =  "11:35:01 GMT -0700 (PDT)"
// now.toISOString()  = "2017-05-11T18:35:01.212Z"
