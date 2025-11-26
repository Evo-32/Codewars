function treasureCode(clue) {
    let num = clue.match(/\d+/g).map(Number);
    let a = num[0];
    for (let i = 1; i < num.length; i++) {
        let b = num[i];
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
    }
    let gcd = a;
    let j = 0;
    let newNum = num.map(n => n / gcd);
    return clue.replace(/\d+/g, () => newNum[j++]);
}