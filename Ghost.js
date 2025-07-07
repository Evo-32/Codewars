class Ghost {
  constructor(){
   let colors = ['white','yellow','purple','red'];
   this.color =  colors[Math.floor(Math.random()*colors.length)]
    }
}

const ghost = new Ghost();
console.log(ghost.colors);