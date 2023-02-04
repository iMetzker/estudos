let n = 15;


function somatorio(n) {
    if (n === 1) {
        return 1;
    }

    return n + somatorio(n - 1);
}

console.log(somatorio(n));