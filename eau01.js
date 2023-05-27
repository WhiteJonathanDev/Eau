const buildList = () => {
    const list = []
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++) {
                for (let l = 0; l <= 9; l++) {
                    list.push('' + i + j + ' ' + k + l)
                }
            }
        }
    }
    return list
}

console.table(buildList())