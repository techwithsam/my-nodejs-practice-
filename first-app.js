// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello samuel with Node.js');

var nam = 'Samuel Adekunle';
var age = 22;
var hasHobbies = true;

function testFunc(uname, uage, uhobbies) {
    return 'My name is ' + uname + ', I am ' + uage + ' years old' +  '\nHobbies: ' + uhobbies;
}

const summarize = (uname, uage, uhobbies) => {
    return 'My name is ' + uname + ', I am ' + uage + ' years old' +  '\nHobbies: ' + uhobbies;
}

console.log(testFunc(nam, age, hasHobbies));
