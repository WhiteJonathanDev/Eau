const arg = process.argv[2]
let result = true

if (process.argv.length > 3) {
    console.log('error')
    process.exit()
} else {
    for (let i = 0; i < arg.length; i++) {
        if (isNaN(arg.charAt(i))) {
            result = false
            break
        }
    }
    console.log(result)
}