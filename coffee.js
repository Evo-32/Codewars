function howMuchCoffee(events) {
  const validEvents = ['cw', 'dog', 'cat', 'movie'];
  let coffee = 0;

  for (const event of events) {
    const lower = event.toLowerCase();

    if (!validEvents.includes(lower)) continue;

    if (event === lower) {
      coffee += 1;
    } else if (event === event.toUpperCase()) {
      coffee += 2;
    }
  }

  return coffee > 3 ? 'You need extra sleep' : coffee;
}