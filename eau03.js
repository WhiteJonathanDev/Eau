const arg = process.argv[2]
const list = [0, 1, 1, 2]

if (arg < 0 || isNaN(arg)) {
    console.log('-1')
} else if (arg <= 3) {
    console.log(list[arg])
} else {
    for (let i = 3; i < arg; i++) {
        const newValue = list[i] + list[i - 1]
        list.push(newValue)
    }
    console.log(list[arg])
}
