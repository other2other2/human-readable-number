module.exports = function toReadable(number) {
    let result = '';
    const one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const toTextUnderHundred = (number) => {
        if (number < 20) {
            return one[number];
        }
        if (number < 100) {
            return `${ten[Math.floor(number / 10)]} ${one[number % 10]}`
        } else return toTextUnderThousand(number);
    }

    const toTextUnderThousand = (number) => {
        if (number < 1000) {
            let hundredQuantity = Math.floor(number / 100);
            return `${one[hundredQuantity]} hundred ${toTextUnderHundred(number % 100)}`;
        } else return toTextUnderMillion(number);
    }

    const toTextUnderMillion = (number) => {
        if (number < 1000000) {
            let thousandQuantity = Math.floor(number / 1000);
            return `${toTextUnderHundred(thousandQuantity)} thousand ${toTextUnderHundred(number % 1000)}`;
        }
    }

    if (number == 0 || typeof number !== 'number') {
        return 'zero';
    } else if (number >= 1000000) {
        return 'to long number';
    }

    return toTextUnderHundred(number).trim();
}