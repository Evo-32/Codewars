function sortByArea(array) {
    return array.map((shape) => {
        if(Array.isArray(shape)){
               return  shape[0] * shape[1]
        }else{
                return Math.PI*shape*shape
        }
    }).sort((a,b) => a-b)
}