const string1 = process.argv[2]
const string2 = process.argv[3]

if (process.argv.length < 4 || !isNaN(string1) || !isNaN(string2)) {
    console.log('error')
} else {
    console.log(string1.includes(string2))
}
