function formatDuration(seconds) {
  if (seconds === 0) return "now";
const units = [
  { name: "year", secs: 31536000 },
  { name: "day", secs: 86400 },
  { name: "hour", secs: 3600 },
  { name: "minute", secs: 60 },
  { name: "second", secs: 1 }
];

  const parts = [];

  for (let { name, secs } of units) {
    const value = Math.floor(seconds / secs);
    if (value > 0) {
      parts.push(value + " " + name + (value > 1 ? "s" : ""));
      seconds -= value * secs;
    }
  }

  if (parts.length === 1) return parts[0];

  const last = parts.pop();
  return parts.join(", ") + " and " + last;
}