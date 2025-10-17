function dutyFree(normPrice, discount, hol){
  let saving = (normPrice* discount)/100
  return Math.floor(hol/saving)
}