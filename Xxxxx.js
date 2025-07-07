function hello(name = '') {           
  name = name.trim();                

  if (name === '') return 'Hello, World!';

  const fixed = name[0].toUpperCase() + name.slice(1).toLowerCase(); // first character should be capitalised
  return `Hello, ${fixed}!`;          
}