const checkIfSameNumbers = (index, index1, index2) => {
    return index !== index1 && index !== index2 && index1 !== index2
}

const buildReverse = (index, index1, index2) => {
    let numberReverse = ''
    if (index === 0) {
        numberReverse += '' + index2 + index1
    } else {
        numberReverse += '' + index2 + index1 + index
    }
    return numberReverse * 1
}



const list = []
for (let i = 0; i < 10; i++) {
    for (let i1 = 0; i1 < 10; i1++) {
        for (let i2 = 0; i2 < 10; i2++) {
            if (checkIfSameNumbers(i, i1, i2)) {
                const numberReverse = buildReverse(i, i1, i2)
                if (!list.some(el => el * 1 === numberReverse)) {
                    list.push('' + i + i1 + i2)
                }
            }
        }
    }
}

console.table(list)