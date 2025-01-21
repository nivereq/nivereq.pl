/*
Copyright by NivereQ 2025

*/
const {
   log
} = console; // Easy logging.
const getCurrentMs = () => {
   return Date.now();
}
let lastTime = Cookies.get("ms") || null;
let time = getCurrentMs();
log(`⌛️ | nivereq.pl is loading...`);
document.body.onload = () => {
   let loadTime = getCurrentMs() - time;
   log(`✅ | nivereq.pl loaded successfully in ${loadTime}ms.`);
   loadTime > lastTime && log(`⚠️ | last loading time is shorten`);
   Cookies.set("ms", loadTime);
}
