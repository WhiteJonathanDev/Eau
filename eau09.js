const number1 = process.argv[2]
const number2 = process.argv[3]

if (process.argv.length > 4 || isNaN(number1) || isNaN(number2) || number1 === number2) {
    console.log('error')
    process.exit()
} else {
    if (number1 < number2) {
        for (let i = number1; i < number2; i++) {
            console.log(i * 1)
        }
    } else {
        for (let i = number2; i < number1; i++) {
            console.log(i * 1)
        }
    }
}