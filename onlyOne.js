function onlyOne(...bools) {
  return bools.filter(bool => bool === true).length === 1
}
