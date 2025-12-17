var runLengthEncoding = function(str){
    if(!str) return []
  let result = [];
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result.push([ count,str[i - 1],]);
            count = 1;
        }
    }

    return result;
}