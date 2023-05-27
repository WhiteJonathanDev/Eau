const list = []

for (let i = 2; i < process.argv.length; i++) {
    list.push(process.argv[i] * 1)
}

if (list.length < 2 || list.some(el => isNaN(el))) {
    console.log('err')
    process.exit()
} else {
    for (let i = list.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (list[j + 1] < list[j]) {
                const temp = list[j + 1]
                list[j + 1] = list[j]
                list[j] = temp
            }
        }
    }
    console.log(list)
}
