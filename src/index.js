module.exports = class {
    Say(number) {
        if (number % 5 == 0) {
            return 'Buzz'
        } else if (number % 3 == 0) {
            return 'Fizz'
        }
        return number.toString()
    }
}