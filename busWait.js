function sc(time, km) {
  let start = 6 * 60;
  let finish = 20 * 60;

  let [hour, minutes] = time.split(":").map(Number);
  let waiting = hour * 60 + minutes;

  let interval = km * 2;

  for (let bus = 360; bus <= finish; bus += 15) {
    let arrival = bus + interval;

    if (arrival >= waiting) {
      let h = Math.floor(arrival / 60) % 24;
      let m = arrival % 60;
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    }
  }
  let arrival = 6 * 60 + interval;
  let h = Math.floor(arrival / 60) % 24;
  let m = arrival % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

