
/* 1. Given an array. Write a recursive function that removes the first element and returns the given array. 
(without using arr.unshift(),assign second element to first, third element to second...).*/

/*function delFirstElem(arr = [], i = 0) {
    if (arr.length === 0 || arr.length - 1 === i) {
        arr.length = i;
        return arr;
    } else{
     arr[i] = arr[i + 1];
    return delFirstElem(arr, i + 1);
    }
}

var res = delFirstElem([6, 78, 'n', 0, 1]);
alert(res);*/


/*2. Given an array of nested arrays. Write a recursive function that flattens it. 
(Hint create function that concats arrays). */

/*function flattArr(arr, i = 0, result = [],) {
    if (arr.length === i) {
        return result;
    }
    if (Array.isArray(arr[i])) {
        j = 0;
        flattArr(arr[i], j, result); 
        return flattArr(arr, i + 1, result)
    } else {
        result.push(arr[i]);
        return flattArr(arr, i + 1, result);
    }
}*/

/*3. Given a number. Write a function that calculates its sum of the digits and if that sum 
has more than 1 digit find the sum of digits of that number. 
Repeat that process if needed and return the result.*/

/*function sumOfDigits(num = 29, sum = 0) {
    if (num < 9 || num === undefined) {
        return sum;
    }
    while (num) {
		sum = sum + (num % 10);
		num = Math.floor(num / 10);
    }
    if (sum > 9) {
        return sumOfDigits(sum);
    }
    return alert(sum);
}

sumOfDigits(29);*/



/* 4.Given an object. Invert it (keys become values and values become keys). 
If there is more than key for that given value create an array.*/




