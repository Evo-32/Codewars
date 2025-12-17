class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

function mostMoney(students) {
  if (students.length === 0) return null;
  if (students.length === 1) return students[0].name;

  const amounts = students.map(s =>
    s.fives * 5 + s.tens * 10 + s.twenties * 20
  );

  const max = Math.max(...amounts);
  const min = Math.min(...amounts);

  if (max === min) return 'all';

  const index = amounts.indexOf(max);
  return students[index].name;
}