function checkUser(userName) {
  let user = userName
    .replace(/0/g, 'o')
    .replace(/1/g, 'l')
    .replace(/2/g, 'z')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/6/g, 'b')
    .replace(/7/g, 't')
    .replace(/8/g, 'B')
    .replace(/9/g, 'g')
    .toLowerCase();


  const  check = "Mxyzptlk".toLowerCase();
  let binary = "";

  for (let ch of check) {
    binary += user.includes(ch) ? "1" : "0";
  }


  let decimal = parseInt(binary, 2);
  let level = (decimal / 255) * 100;


  const text = [
    "This one's too clean, should be a bot.",
    "This one seems ok, may be there's still some humans around here...",
    "This one's probably an alien from 5th dim, be careful!",
    "Yeeerk!!! Mr Mxyztplk himself the imp of imps! Only Superman can beat him!"
  ];

  let msg;
  if (level < 1) msg = text[0];
  else if (level < 50) msg = text[1];
  else if (level < 90) msg = text[2];
  else msg = text[3];

  return msg;
}