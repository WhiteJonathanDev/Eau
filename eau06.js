const string1 = process.argv[2]

if (process.argv.length > 3 || !isNaN(string1)) {
    console.log('error')
} else {
    let result = ''
    for (let i = 0; i < string1.length; i++) {
        if ((i === 0 || i % 2 === 0) && (/[a-zA-Z]/).test(string1.charAt(i))) {
            result += string1[i].toUpperCase()
        } else {
            result += string1[i]
        }
    }
    console.log(result)
}
