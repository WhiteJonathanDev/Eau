const list = []
const key = process.argv[process.argv.length - 1]

if (process.argv.length < 3) {
    console.log('error')
    process.exit()
} else {
    for (let i = 2; i < process.argv.length - 1; i++) {
        list.push(process.argv[i])
    }
    const index = list.findIndex(el => el === key)
    console.log(index)
}