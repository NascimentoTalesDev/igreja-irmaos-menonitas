export default function checkDecimalNumbers(number) {
    if (!number) {
        return null
    }
    if ((number % 1) === 0) {
        return number.toFixed(2).replace('.', ',');;
    } else {
        return number.toString().replace('.', ',');;
    }
}