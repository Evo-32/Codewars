function highestRank(arr) {
    let counts = {};
    let mostCount = 0;
    let mostFrequent ='';

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
        let n = Number(num);
        if (counts[num] > mostCount || (counts[num] === mostCount && n > mostFrequent)) {
            mostCount = counts[num];
            mostFrequent = n;
        }
    }

    return mostFrequent;
}
