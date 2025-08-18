const cannonsReady = (gunners) => {
  const answer= Object.values(gunners);
  if(answer.every(answer => answer === 'aye')){
    
    return  'Fire!';
  }
  return 'Shiver me timbers!';
}