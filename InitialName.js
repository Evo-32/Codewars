function initializeNames(name){
    let neew = name.trim().split(/\s+/)
    let  middleInitials = ''
    if(neew.length<=2) return name;
    let firstName = neew[0];
    for (let i = 1; i < neew.length - 1; i++) {
     middleInitials += neew[i][0].toUpperCase() + '. ';
  }
    let lastName = neew[neew.length -1];
    return `${firstName} ${middleInitials}${lastName}`.trim();
}