function count(string) {
    return string.split('').reduce((count,ch) =>{
        count[ch] = (count[ch] || 0) + 1
        return count
    } ,{})
}

// count['a'] = 0 + 1 → 1
// count['a'] = 1 + 1 → 2