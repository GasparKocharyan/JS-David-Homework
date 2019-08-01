
/* 1. Write a function which receives an array and a number as arguments and returns 
a new array from the elements of the given array which are larger than the given number.*/

function isLarderArr(arr = [], element, def = 'Such values do not exist.') {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > element) {
           result.push(arr[i]);
        } else if (i === arr.length -1 && result.length <= 0) {
            return def;
        }
    }
    return result;
}
alert(isLarderArr([10, 25, 16, -5, 30, 15, 24] , 16));
alert(isLarderArr([1, 1, 2, -3, 0, 8, 4, 0], 9));

/*2. Write a function, which receives two numbers as arguments and finds all numbers 
between them such that each digit of the number is even. The numbers obtained should be 
printed in a comma-separated sequence on a single line. */

function evenNumberBetweenArg(startNum, endNum, result = []) {
    for (let i = startNum; i <= endNum; i++) {
        check = false;
        if (i % 2 === 0) {
             var num = i;
            while (num) {
                if (num % 2 === 0) {
                    num = Math.floor(num / 10);
                    var check = true;
                } else {
                    check = false;
                    break;
                }
            }
        } if (check === true) {
            result.push(i);
        } else {
            check = false;
        }
    }
    return result.length === 0 ? alert("Such numbers does not exist.") : alert(result);
}

evenNumberBetweenArg(19, 42);
evenNumberBetweenArg(99, 199);

/*3. Write a recursive function to determine whether all digits of the number are odd or not.*/

function isOdd(num, res) {
    if (num < 0) {
       num = Math.abs(num); 
    }
     if (num === 0) {
      res = false; 
    }
     if (num !== 0 && res !== false) {
         if (num % 2 === 0) {
             return isOdd(num, res = false);
         } else {
             num = Math.floor(num / 10);
             return isOdd(num, res = true);
         }
     }
     return alert(res);
 }

isOdd(7791);
isOdd(4211133);
isOdd(5);
isOdd(0);



/* 4. Given an array of numbers. Write a recursive function to find its minimal positive element. 
(if such element does not exist, return -1)․*/

function getMinPosElem(arr,  i = 0, min = arr[i],) {
    if (i < arr.length) {
        if (min < arr[i] || arr[i] < 0) {
            return getMinPosElem(arr, i + 1, min);
        } else {
            return getMinPosElem(arr, i + 1, min = arr[i]);
        }
    }
    return alert(min);
}

getMinPosElem([56, -9, -233, 2, 5, -105, 55, 10]);

/*5. Given an array of numbers which is almost sorted in ascending order.  
Find the index where sorting order is violated. */

function sortViolatedIndex(arr, i = 0, index = -1) {
    if (i < arr.length - 2 && i !== index ) {
        if (arr[i] <= arr[i + 1]) {
            return sortViolatedIndex(arr, i + 1, index);
        } else {
            return sortViolatedIndex(arr, i + 1, index = i + 1);
        }
    }
    return alert(index);
}

sortViolatedIndex([-9, -4, -4, 3, 12, 4, 5]);