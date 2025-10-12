export function Age() {
  let bdayMs = new Date("2008-05-03").getTime();
  let currentMs = new Date().getTime();
  let diff = currentMs - bdayMs;
  return Math.floor(diff / (1000 * 3600 * 24 * 365.25));
}
