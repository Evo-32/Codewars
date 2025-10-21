function generateHashtag (str) {
    if(str.trim().split('').length === 0) return false
    let hashtag = '#' + str.trim().split(/\s+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
    
     return hashtag.length > 140? false : hashtag
}