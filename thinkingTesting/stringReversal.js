function solve(st, a, b){
    let middle = st.slice(a,b+1).split('').reverse().join('')
    return st.slice(0,a) + middle + st.slice(b+1)
}