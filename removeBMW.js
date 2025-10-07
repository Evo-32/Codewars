function removeBMW(str){
  if(typeof str === 'string'){
    return str.replace(/[BMWbmw]/g,"")
    }
  return ''
}