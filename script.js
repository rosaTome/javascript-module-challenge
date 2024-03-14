// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
// isNumberPositive(-1); // returns false
// isNumberPositive(10); // returns true

// Function takes input number and returns true (positive) or false (negative)
function isNumberPositive(number) {
    if (number > 0) {
        return true
    } else {
        return false;
    }
}
console.log(isNumberPositive(-0));
console.log(isNumberPositive(10));

// 2. Write a function that takes a number of days and converts it into an age.
// convertDaysToAge(3650); // returns 10
// convertDaysToAge(6570); // returns 18
 
function convertDaysToAge(days) {
    const daysInYear = 365;
    // divides number of days by number days in a year 
    const age = days / daysInYear;
    return age;
}
console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
// getLargestNumber(2 ,1, 4); // returns 4
// getLargestNumber(6,2,3); // returns 6

function getLargestNumber(num1, num2, num3) {
    // checks for largest numbers out of the three numbers using if statements 
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    } else {
        return num3;
    }
}
console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

// 4. Write a function that takes an array of names and returns the last name from the array of names.
// getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"

function getLastName(names) {
    return names[names.length - 1];
}
console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false

