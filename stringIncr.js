function incrementString(strng) {
    let numArr = strng.match(/\d+$/);
    let number = numArr ? numArr[0] : ""; 
    
    let letters = number ? strng.slice(0, -number.length) : strng;

    if (number === "") {
        return letters + "1";
    } else {
        let incr = String(Number(number) + 1);
        incr = incr.padStart(number.length, "0");
        return letters + incr;
    }
}
