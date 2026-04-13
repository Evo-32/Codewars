function countLonelyLetters(text) {
    let word = text.toLowerCase().replace(/[^a-z]/g, '');

    const count = {};


    for (let chr of word) {
        count[chr] = (count[chr] || 0) + 1;
    }

    let result = 0;

    for (let chr in count) {
        if (count[chr] === 1) {
            let code = chr.charCodeAt(0);

            let prev = String.fromCharCode(code - 1);
            let next = String.fromCharCode(code + 1);

            if (!count[prev] && !count[next]) {
                result++;
            }
        }
    }

    return result;
}