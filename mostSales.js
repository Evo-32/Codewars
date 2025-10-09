function top3(products, amounts, prices) {
    let revenue = []
    let corr = []
    for(let i=0; i<amounts.length;i++){
        revenue.push(amounts[i]*prices[i])
    }
    for(let i=0; i<products.length;i++){
        corr.push([products[i],revenue[i]])
    }
    return corr.sort((a,b) => b[1]-a[1]).filter((prod,index) => {
        while(index<3){
             return prod[0]
        }
    }).map(prod => prod[0])
}