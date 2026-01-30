function byState(str) {
  const states = {
    AZ: 'Arizona',
    CA: 'California',
    ID: 'Idaho',
    IN: 'Indiana',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia'
  };

  const lines = str.split(/\r?\n/).filter(Boolean);
  const grouped = {};

  lines.forEach(line => {
    const stateCode = Object.keys(states)
      .find(code => line.endsWith(code));

    const fullState = states[stateCode];

    const formatted = line
      .replace(/,/g, '')
      .replace(stateCode, fullState);

    if (!grouped[fullState]) grouped[fullState] = [];
    grouped[fullState].push(formatted);
  });
return Object.keys(grouped)
  .sort()
  .map((state, index) => {
    const friends = grouped[state]
      .sort()
      .map(f => `..... ${f}`)
      .join('\r\n');

    const stateLine = index === 0 ? state : ` ${state}`;

    return `${stateLine}\r\n${friends}`;
  })
  .join('\r\n');
}