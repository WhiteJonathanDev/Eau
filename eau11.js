const list = []

for (let i = 2; i < process.argv.length; i++) {
    list.push(process.argv[i])
}

if (list.length < 2 || list.some(el => isNaN(el))) {
    console.log('err')
    process.exit()
} else {
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 0) {
            list[i] = list[i] * -1
        }
    }
    const listSorted = list.sort((a, b) => a - b)
    console.log(listSorted)
    console.log(listSorted[1] - listSorted[0])
}