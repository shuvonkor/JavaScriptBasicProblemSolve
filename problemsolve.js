// Problem 1: 
function getRandomNumbr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumbr(1, 6));

// Problem 2: 
const students = ["Shovn", "Makin", "Arpita", "Shuvo", "Jamal", "Bala"];
console.log(students.sort());

// Problem 3: 
const studentsRolls = [22, 8, 10, 50, 49, 1, 2, 5, 9, 6, 3, 7];
console.log(studentsRolls.sort(function(a, b){
    return a - b;
}));

// Problem 4: Leap year fiding 
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 == 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year.`);
    }
    else {
        console.log(`${year} is not a leap year.`);
    }
};
isLeapYear(2028);

// Problem 5: Finding vowels in sentence 
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letter = Array.from(sentence);

    letter.forEach(function (value) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
};
console.log(countVowels("I love Bangladesh"));

// Problem 6: From array find duplicate Number
const number = [4, 50, 10, 2, 3, 4, 6, 98, 7, 2, 3, 56, 9, 87,];

const duplicateNumber = number.filter(duplicateFunction);

function duplicateFunction(value, index, array) {
    return array.indexOf(value) == index;
};
console.log(duplicateNumber);