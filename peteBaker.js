function cakes(recipe, available) {
    let count = [];
    for(let key in recipe){
                if(available[key] === undefined) return 0;
                count.push(Math.floor(available[key] / recipe[key]))
    }
  
    return Math.min(...count)
}