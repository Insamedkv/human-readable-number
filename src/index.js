module.exports = function toReadable (number) {
let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let digit = 0;   
if (number < 20) {
    return ones[number]; 
}   
if (number < 100) { 
    digit = number % 10; //остаток    
    return (tens[Math.floor(number / 10) - 2] + " " + (digit > 0 ? ones[digit] : ' ')).trim();   // -2, т.к первые два десятка использованы в ones, trim для отрезания пробелов
// в конце строк, поскольку не проходили тесты
}
if (number < 1000) {    
    return (ones[Math.floor(number/100)] + " hundred" +" "+ (number % 100 > 0 ? toReadable (number % 100) : " ")).trim();   
}
}
