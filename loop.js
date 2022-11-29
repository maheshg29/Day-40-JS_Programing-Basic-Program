// Write a program that takes a input and determines if the number is a prime.

    let number = Math.floor(Math.random() * 999);
console.log(number);


// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            var isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Given Number is Prime Number");
    } else {
        console.log("Given Number is Not a Prime Number");
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}