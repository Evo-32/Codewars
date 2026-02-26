const powers = n => {
    return [...n.toString(2)].reverse().map((bit,i) => bit === '1'? 
    2**i : 0).filter(Boolean)
};