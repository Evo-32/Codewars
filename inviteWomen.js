function inviteMoreWomen(L) {
  let men = L.filter(m => m === 1).length;
  let women = L.filter(w => w === -1 ).length;
  return women < men? true :false
}