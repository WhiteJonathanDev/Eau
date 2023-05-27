if (process.argv.length < 3) {
    console.log('please send enough arguments')
    process.exit()
} else {
    const list = []
    for (let i = 2; i < process.argv.length; i++) {
        list.push(process.argv[i])
    }
    const listSorted = list.sort((a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0)
    })
    let string = ''
    listSorted.forEach(el => {
        string += el + ' '
    })
    console.log(string)
}
