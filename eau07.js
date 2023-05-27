const arg = process.argv[2]

if (process.argv.length !== 3 || !isNaN(arg)) {
    console.log('error')
    process.exit()
} else {
    const array = arg.split(/\t|\n| /)
    let result = ''
    array.forEach(el => {
        const string = el.charAt(0).toUpperCase() + el.slice(1)
        result += string + ' '
    })
    console.log(result)
}
