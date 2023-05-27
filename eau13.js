const list = []

for (let i = 2; i < process.argv.length; i++) {
    list.push(process.argv[i] * 1)
}

if (list.length < 2 || list.some(el => isNaN(el))) {
    console.log('err')
    process.exit()
} else {
    for (let i = 0; i < list.length; i++) {
        let min = i
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j
            }
        }
        const tmp = list[i]
        list[i] = list[min]
        list[min] = tmp
    }
    console.log(list)
}
