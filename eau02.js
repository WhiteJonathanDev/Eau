const args = []

for (let i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i])
}

if (args.length) {
    for (let i = args.length - 1; i > -1; i--) {
        console.table(args[i])
    }
} else {
    console.log('error')
    process.exit()
}
