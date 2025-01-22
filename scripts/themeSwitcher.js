/*
Copyright by NivereQ 2025.

*/


const {isDark, expires, icons} = {
  isDark: "trur",
  expires: 180, //Days
  icons: {
    default: '<i class="bi bi-brightness-high-fill"></i>',
    dark: '<i class="bi bi-brightness-low"></i>'
  }
};

const switcher = document.querySelector(".menu .switcher");
let darkMode = isDark;

function themeSwitch(){
    themeInit();
    document.querySelectorAll("*").forEach(el => {
      if(el.classList.contains("dark-theme")) {
        el.classList.remove("dark-theme");
        setCookie("dark", "false", expires);
      }
      else{
        el.classList.add("dark-theme");
        setCookie("dark", "true", expires);
      }
    })
    themeInit();
}

function themeInit(){
  if(getCookie("dark") != ""){
    darkMode = getCookie("dark");
  }
  else{
    setCookie("dark",isDark,expires);
    darkMode = isDark;
  }
  if(darkMode == "true") {
    document.querySelectorAll("*").forEach(el => el.classList.add("dark-theme"));
    switcher.innerHTML = icons.default;
  }else{
    switcher.innerHTML = icons.dark;
  }
  return darkMode;
}