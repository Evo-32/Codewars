function isLucky(ticket) {
    if(ticket.length < 6 || ticket.length > 6) return false
    if(!/^\d+$/.test(ticket)) return false
    
    let first = ticket.slice(0,3).split('').map(Number).reduce((total,curr) => total+curr)
    let second = ticket.slice(3).split('').map(Number).reduce((total,curr) => total+curr)
    
    return first === second? true :false
}