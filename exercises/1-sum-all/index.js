/**
 *
 */
const sumAll = (num1, num2) => {
    
    let i = num1 < num2 ? num1 : num2;
    let big = num1 > num2 ? num1 : num2;
    
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
  
    while (i <= big) {
        sum = sum + i;
        i++
        }
    return sum;
} 

module.exports = sumAll
