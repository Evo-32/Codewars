function evenOrOddFunc(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}

const evenOrOdd = new Proxy(evenOrOddFunc, {
    get(target, prop) {
        const num = Number(prop);
        if (!isNaN(num)) {
            return target(num);
        }

        return target[prop];
    },
});