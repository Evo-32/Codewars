function shortenToDate(longDate) {
    let comma = longDate.indexOf(',')
    return longDate.slice(0,comma)
}