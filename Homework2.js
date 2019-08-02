

/*1. Insert a digit and a number. Check whether the digits contains in the number or not.*/

/*var digit = +prompt('Enter a digit', '');
var digitInNumber = +prompt('Enter a number', '');
var lastNumber;

while (digitInNumber > 0  && lastNumber !== digit) {
        lastNumber = digitInNumber % 10;
            if ( lastNumber === digit) {
            alert('Yes');
        } 
        digitInNumber = Math.floor(digitInNumber / 10);
}; 
if (digit === 0 && digitInNumber === 0) {
    alert('Yes');
} else if (digitInNumber >= 0  && lastNumber !== digit) {
    alert('No');
};

// Armeni tarberak@ 
var number = +prompt('Enter a number');
var digit = +prompt('Enter a digit');

var message = 'No';

while (number !== 0) {
  var currentDigit = number % 10;
  if (currentDigit === digit) {
    message = 'Yes';
    break;
  }
  number = Math.floor(number / 10);
}

alert(message);




/*2. Enter a number. Reverse its first and last digits. Print the new number.*/

/*var reverseNumber = +prompt('Enter a number', '');
var lastDigit = Math.floor(reverseNumber % 10);
var firstDigit;
var middleNumber;
var forFirstDigit = reverseNumber;
var count = 0;
var divider = 1

while (forFirstDigit >= 10) {
    forFirstDigit = Math.floor(forFirstDigit / 10);
    firstDigit = forFirstDigit ;
    count++;
}
if (reverseNumber >=0 && reverseNumber < 10) {
    alert(reverseNumber);
} else if (reverseNumber > 9 && reverseNumber < 100) {
    alert(lastDigit.toString() + firstDigit.toString());
} else {
    for (let i = 0; i < (count-1); i++) {
    divider += '0';
    }
    middleNumber = (Math.floor(reverseNumber / 10)) %  (+divider);
    alert(lastDigit.toString() + middleNumber.toString() + firstDigit.toString())
}*/

/*var reverseNumber = +prompt('Enter a number', '');
var lastDigit = Math.floor(reverseNumber % 10);
var firstDigit;
var middleNumber = '';
var forFirstDigit = reverseNumber;
var numberWithoutLastDigit =  (Math.floor(reverseNumber / 10));

while (forFirstDigit >= 10) {
    forFirstDigit = Math.floor(forFirstDigit / 10);
    firstDigit = forFirstDigit ;
    }
if (reverseNumber >=0 && reverseNumber < 10) {
    alert(reverseNumber);
} else if (reverseNumber > 9 && reverseNumber < 100) {
    alert(lastDigit.toString() + firstDigit.toString());
} else {
    while (numberWithoutLastDigit >= 10) {
        middleNumber = (numberWithoutLastDigit % 10) +  middleNumber;
        numberWithoutLastDigit = Math.floor(numberWithoutLastDigit / 10)
    }
    alert(lastDigit.toString() + middleNumber.toString() + firstDigit.toString())
}*/

/*3. Enter a number. Find the difference between its biggest and smallest digits.*/

/*var enteredNumber = +prompt('Enter a number', '');
var biggestNumber = 0;
var smallestNumber = enteredNumber % 10;
while (enteredNumber > 0) {
    if ((enteredNumber % 10) > biggestNumber) {
        biggestNumber = enteredNumber % 10
    } else if ((enteredNumber % 10) < smallestNumber) {
        smallestNumber = enteredNumber % 10
    } else if ((enteredNumber % 10) === 0) {
        smallestNumber = 0;
    }
    enteredNumber = Math.floor(enteredNumber / 10);
}
alert('The biggest is ' + biggestNumber);
alert('The smallest is ' + smallestNumber);
alert('The difference between is ' + (biggestNumber - smallestNumber));

/*4. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.*/

// Armeni lucum@

/*var number = 2;

if (number === 1) {
  alert('No');
} else if (number % 2 === 0) { // if number is even, no need to check further
  alert('No');
} else {
  for (var i = 3; i < number / 2; i += 2) { 
    // if code reached here, we already know that the number is not even, so we will start
    // from 3, and then increment y 2, so we won't check if number is divisible by 4, 6, 8, etc...
    if (number % i === 0) {
      alert('No');
      break;
    }
    // the loop will continue until number/2, because larger numbers obviously do not divide number 
  }
  // if we did not find a divisor, then number is prime
  alert('Yes');
}


/*var primeNumberCheck = +prompt('Enter a number', '');
var resultPrime;
if (primeNumberCheck === 1) {
    resultPrime = 'No';
} else if (primeNumberCheck === 2) {
    resultPrime = 'Yes';
} else if (primeNumberCheck % 2 === 0 ) {
    resultPrime = 'No'; 
} else if (primeNumberCheck === 3 ) {
    resultPrime = 'Yes'; 
} else {
    for (var i = 3; i < 10 && i < primeNumberCheck && resultPrime !== 'No'; i = (i + 2)) {
        if (primeNumberCheck % i === 0 ) {
            resultPrime = 'No';
        } else {
            resultPrime = 'Yes';
        }
    }
}
alert (resultPrime);
// using break
/*var primeNumberCheck = +prompt('Enter a number', '');
var resultPrime;
if (primeNumberCheck === 1) {
    resultPrime = 'No';
} else if (primeNumberCheck === 2) {
    resultPrime = 'Yes';
} else if (primeNumberCheck % 2 === 0 ) {
    resultPrime = 'No'; 
} else if (primeNumberCheck === 3 ) {
    resultPrime = 'Yes'; 
} else {
    for (var i = 3; i < 10 && i < primeNumberCheck ; i = (i + 2)) {
        if (primeNumberCheck % i === 0 ) {
            resultPrime = 'No' ; break
        } else {
            resultPrime = 'Yes';
        }
    }
}
alert (resultPrime);
// old cod without optimization 

/*var primeNumber = +prompt('Enter a number', '');
var resultPrime;
if (primeNumber === 1) {
    resultPrime = 'No';
} else if (primeNumber === 2) {
    resultPrime = 'Yes';
} else {
    for (var i = 2; i < primeNumber && resultPrime !== 'No'; i++) {
        if (primeNumber % i === 0 ) {
            resultPrime = 'No';
        } else (resultPrime = 'Yes');
    }
}
alert (resultPrime);*/

/*5.Write a program that reads two strings for playing the game of Rock-Paper-Scissors. If
the strings entered by the user are not 'Paper', 'Rock' or 'Scissors', the program keeps
on prompting the user to enter new values. If valid strings are inserted, repeat the loop,
until one of the sides wins. ( You can use alert instead of console.log ).*/

/*var win;
while ( win !== 'Win') {
    
    var player_1 =  prompt('Enter the Rock, Paper or Scissors', '');
    var player_2 =  prompt('Enter the Rock, Paper or Scissors', '');

    if (player_1 !== 'Rock' && player_1 !== 'Paper' && player_1 !== 'Scissors' ||
        player_2 !== 'Rock' && player_2 !== 'Paper' && player_2 !== 'Scissors') {
            alert('Enter valid String');
    } else if (player_1 === 'Rock' && player_2 === 'Scissors' ||  player_1 === 'Paper' && player_2 === 'Rock' ||
        player_1 === 'Scissors' && player_2 === 'Paper') {
            win = 'Win';
            alert('1nd player wins!') 
        } else if (player_2 === 'Rock' && player_1 === 'Scissors' ||  player_2 === 'Paper' && player_1 === 'Rock' ||
        player_2 === 'Scissors' && player_1 === 'Paper') {
            win = 'Win';
            alert('2nd player wins!') 
        } else if (player_2 === player_1) {
            win = 'Win';
            alert('Draw! Enter new values.') 
        }
}
/*6. Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2,
3, 5, 8 …, a k = a k-1 + a k-2 ).*/

/*var fibonacciNumber = +prompt('Enter number', '');
var F0 = 0;
var F1 = 1;
var Fn
if (fibonacciNumber === 0 || fibonacciNumber === 1 ) {
    alert('Enter number greater than one'); 
} else { while (fibonacciNumber >= 0){
    Fn = F0;
    F0 = F0 + F1;
    F1 = Fn;
    fibonacciNumber--;
  }
  alert(Fn);
}

/* 7 Given a number n ( n > 0 ) . Print Fibonacci series up to n .*/

/*var numberSequence = +prompt('Enter number', '');
var F0 = 0;
var F1 = 1;
var Fn

while (numberSequence > F0){
    Fn = F0;            
    F0 = F0 + F1;       
    F1 = Fn;            
    alert(Fn);
  }

/* 8. Write a program, to calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + (− 1k) * 1/n .*/

/*var sequenceNumber = +prompt('Enter odd number', '');

while (sequenceNumber % 2 === 0) {
    var sequenceNumber = +prompt('Please enter odd number', '');
}
var firstNumber = 1;
var count = 2;
var result = 0;
for (let i = 1; i <= sequenceNumber ; i = (i + 2)) {
    var value = ((Math.pow(-1, count)) * (1 / firstNumber));
    count++;
    firstNumber += 2;
    result += value;
}
alert(result);


/* 9.Write a program which will give you all of the potential combinations of a two-digit
decimal combination, printed in a comma delimited format
‘00’, ‘01’, ‘02’, …, ‘98’, ‘99’.*/

/*var print_1 = '';
var print_2 = '';
for (let i = 1; i <= 9; i++) {
    var a = i * 10;
    print_1 = print_1 + (a % 10).toString() + Math.floor((a / 10)).toString() + ','  
}
for (let i = 10; i < 100; i++) {
    print_2 = print_2 + i.toString() + ',';
}
alert(print_1 + print_2);

//

for (let i = 0; i < 100; i++) {
    if (i < 10) {
        print_1 = print_1 + ('0' + i) + ','
    }
    if (i > 9) {
        print_2 = print_2 + (i + ',')
    }  
}
alert(print_1 + print_2);

/* 10.Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder.*/

/*var enteredNumber = +prompt('Enter a number','');
var forSum = enteredNumber;
var forProduct = enteredNumber;
var product = 1;
var sum = 0;
if (enteredNumber === 0) {
    alert('Cannot calculate.');
} else { while (forSum > 0) {
    sum += (forSum % 10);
    forSum = Math.floor(forSum / 10);
}
while (forProduct > 0) {
    product *= (forProduct  % 10);
    forProduct = Math.floor(forProduct / 10);
}
if (product % sum === 0) {
    alert('Quotient is ' + (product / sum));
} else {
    alert('Remainder is ' + (product % sum));
}
} */