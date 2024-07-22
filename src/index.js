module.exports = function toReadable(number) {
    let num;
    let numberStr = number.toString();
    const belowNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const belowTwenty = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion'];

    if (number === 0) num = 'zero';
    else if (number < 10) {
        num = belowNine[number];
    } else if (10 < number && number < 20) {
        num = belowTwenty[number - 10];
        
    } else if (number < 100 && number % 10 === 0) {
        num = tens[number / 10];
    } else if (number < 100) {
        num = tens[Math.floor(number / 10)] + ' ' + belowNine[number % 10]; /*` ${belowNine[number % 10]}`*/
    } 
    
    else if (number < 1000 && number % 100 === 0) {
        num = belowNine[Math.floor(number / 100)] + ' hundred';
    } 
    
    else if (number < 1000 && number % 10 === 0) {
        num = belowNine[Math.floor(number / 100)] + ' hundred ' + tens[(Math.floor(number / 10)) % 10];
    } 
    
    else if (number < 1000 && (number % 100) < 10) {
        num = belowNine[Math.floor(number / 100)] + ' hundred ' + belowNine[number % 100];
    } else if (number < 1000 && (number % 100) < 20) {
        num = belowNine[Math.floor(number / 100)] + ' hundred ' + belowTwenty[number % 100 - 10];
    } 
    
    else if (number < 1000) {
        num = belowNine[Math.floor(number / 100)] + ' hundred ' + tens[(Math.floor(number / 10)) % 10] + ' ' + belowNine[number % 10];
    }

    return num;


}
