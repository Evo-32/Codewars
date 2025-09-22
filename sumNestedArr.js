function SumSquares(l){
    return l.flat(Infinity).map(num => num*num).reduce((total,curr)=> total +=curr,0)
}