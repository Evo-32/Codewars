function XO(str){
    let exesCount = str.split('').filter(chr => chr.toLowerCase() === 'x').length
    let ohsCount = str.split('').filter(chr => chr.toLowerCase() === 'o').length
    return exesCount === ohsCount ? true :false
}

