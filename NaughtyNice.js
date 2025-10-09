function whatListAmIOn(actions){
  let naughty = 0
  let nice = 0
    for(let i=0; i<actions.length; i++){
        if(actions[i].startsWith('g')||actions[i].startsWith('s')||actions[i].startsWith('n')){
            nice ++
        }else if(actions[i].startsWith('b')||actions[i].startsWith('f')||actions[i].startsWith('k')){
            naughty ++
        }
    }
    return nice > naughty ? 'nice' : 'naughty'
}