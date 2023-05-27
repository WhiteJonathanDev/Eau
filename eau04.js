const number = process.argv[2]

const estNombrePremier = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const findPremierNombreSup = (number) => {
    let nombrePremier = number + 1;
    while (!estNombrePremier(nombrePremier)) {
        nombrePremier++;
    }
    return nombrePremier
}

if (isNaN(number) || process.argv.length > 3) {
    console.log('-1')
} else {
    console.log(findPremierNombreSup(number * 1))
}