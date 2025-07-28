function missingWord(nums, str){
    let result = [];
  let word = str.replace(/\s/g,'').toLowerCase();
  nums.sort((a,b) => a-b);
  
  for(let i=0; i<nums.length;i++){
      let position =  nums[i];
      if(position >= word.length){
          return 'No mission today';
      }
          result.push(word[position]);
  }
  return result.join('');
}
console.log(missingWord([0, 3, 5], "I love you"));
console.log(missingWord([7, 10, 1], "see you later"));