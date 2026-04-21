function flickSwitch(arr) {
  let result = [];
  let state = true;

  for (let item of arr) {
    if (item === "flick") {
      state = !state; 
    }
    result.push(state);
  }

  return result;
}