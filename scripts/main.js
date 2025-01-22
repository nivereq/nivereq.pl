/*
Copyright by NivereQ 2025

*/
const {
   log
} = console; // Easy logging.
const getCurrentMs = () => {
   return Date.now();
}
let time = getCurrentMs();
log(`⌛️ | nivereq.pl is loading...`);
document.body.onload = () => {
   themeInit();
   log(`✅ | nivereq.pl loaded successfully in ${getCurrentMs() - time}ms.`);
}
