function pingPong(sounds) {
  let pingScore = 0
  let pongScore = 0
  
  let  server = null
  let prev = null
  let failure = null
  
  let sound = sounds.split('-')
  
  for(let s of sound){
    if(s === 'ping' || s === 'pong'){
      if(server === null) server = s
      prev = s
    }else{
      let lost = prev
      let winner = prev === 'ping'? 'pong' : 'ping'
      
      if(winner === server){
        if(winner === 'ping') pingScore++
        else pongScore++
      }
      
      failure = lost
      server = null
    }
  }
  
  if(pingScore === pongScore){
    return failure === 'ping'? 'pong':'ping'
  }
  return pingScore > pongScore ? 'ping':'pong'
}
