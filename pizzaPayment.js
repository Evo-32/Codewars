function michaelPays(costs) {
  let michaelPayment ;
  if(costs < 5){
     michaelPayment = costs
  }else {
     const katePayment = Math.min(costs / 3 ,10)
    michaelPayment = costs - katePayment
  }
  return Number(michaelPayment.toFixed(2));
}