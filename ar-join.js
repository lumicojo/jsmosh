const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

// split method
const message = 'This is my first message';
const parts = message.split(' ');// = ['This', 'is', 'my', 'first', 'message']
console.log(parts);
// to combine
const combined = parts.join('-');
console.log(combined); // This-is-my-first-message
// this is goog for URL
