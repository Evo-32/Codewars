function tram(stops, descending, onboarding){
  let current = 0
  let capacity = 0
  for(let i=0; i<stops; i++){
    current -= descending[i];
    current += onboarding[i];
    if(current > capacity){
      capacity = current;
    }
  }
    return capacity;
}