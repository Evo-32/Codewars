function solution(string) {
    return string.split('').map(chr => !(chr >= 'A' && chr<= 'Z')? chr: string.indexOf() === 0 ? chr : ` ${chr}`).join('')
}
