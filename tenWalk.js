function isValidWalk(walk) {
  let east = walk.filter(e => e.toLowerCase() === 'e').length
  let west = walk.filter(w => w.toLowerCase()  === 'w').length
  let north = walk.filter(n => n.toLowerCase()  === 'n').length
  let south = walk.filter(s => s.toLowerCase()  === 's').length
  return east === west && north === south && walk.length === 10
}
