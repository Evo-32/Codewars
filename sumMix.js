function sumMix(x){
  let nberArr = [];
  for(let i = 0; i<x.length; i++){
      if(typeof x[i] === "string"){
         let nber = Number(x[i]);
         nberArr.push(nber);
      }
      else{
          nberArr.push(x[i])
      }
  }
  
  let total = nberArr.reduce((acc,curr)=>{
     return acc += curr ;
  },0);
  return total;
}