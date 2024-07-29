module.exports = function toReadable(number) {
    let num;
    let numberStr = number.toString();
    const belowTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    /* const thousands = ['', 'thousand', 'million', 'billion'];*/

    if (number === 0) num = 'zero';

    else if (number < 20) {
        num = belowTwenty[number];
    } else if (number < 100 && number % 10 === 0) {
        num = tens[number / 10];
    } else if (number < 100) {
        num = tens[Math.floor(number / 10)] + ' ' + belowTwenty[number % 10];
    } else if (number < 1000 && number % 100 === 0) {
        num = belowTwenty[Math.floor(number / 100)] + ' hundred';
    } else if (number < 1000 && number % 10 === 0) {
        num = belowTwenty[Math.floor(number / 100)] + ' hundred ' + tens[(Math.floor(number / 10)) % 10];
    } else if (number < 1000) {
        num = belowTwenty[Math.floor(number / 100)] + ' hundred '
            + (((number % 100) < 20)
                ? belowTwenty[number % 100]
                : (tens[(Math.floor(number / 10)) % 10] + ' ' + belowTwenty[number % 10]));
    }
    /*else if (number < 1000 && (number % 100) < 20) {
        num = belowTwenty[Math.floor(number / 100)] + ' hundred ' +  belowTwenty[number % 100];
    } else if (number < 1000) {
        num = belowTwenty[Math.floor(number / 100)] + ' hundred ' + tens[(Math.floor(number / 10)) % 10] + ' ' + belowTwenty[number % 10];
    }*/


    return num;


}
