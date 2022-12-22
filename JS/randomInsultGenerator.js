const randomBodyParts = ['head', 'arm', 'leg', 'foot'];

const randomAdjectives = ['big-ole', 'stanky', 'grody', 'nasty'];

const randomWords = ['goose', 'desk', 'library', 'apple', 'step-father'];

// Assign a random body part to the variable randomBodyPart from a random index from randomBodyParts
// Use Math.floor and Math.random to do this
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!');