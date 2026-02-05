function maxProduct(a) {
    let max1 = Math.max(...a)
    a.splice(a.indexOf(max1),1)
    const max2 = Math.max(...a)
    return max1*max2
}
