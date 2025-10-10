function likes(names) {
    let nameList = names.slice(0,names.length-1).join(', ') + ' and ' + names[names.length-1]
    let rem = names.length -2
    if(names.length === 0){
    return 'no one likes this'
    }else if(names.length === 1){
    return `${names} likes this`
    }else if(names.length === 2){
        return `${names.join(' and ')} like this`
  }else if(names.length === 3){
      return `${nameList} like this`
  }else{
      return `${names.slice(0,2).join(', ')} and ${rem} others like this`
  }
}