const switcher = document.querySelector(".menu .switcher");
let darkMode = "false";

function themeSwitch(){
    themeInit();
    document.querySelectorAll("*").forEach(el => {
      if(el.classList.contains("dark-theme")) {
        el.classList.remove("dark-theme");
        setCookie("dark", "false", 30);
      }
      else{
        el.classList.add("dark-theme");
        setCookie("dark", "true", 30);
      }
    })
}

function themeInit(){
  if(getCookie("dark") != ""){
    darkMode = getCookie("dark");
  }
  else{
    darkMode = setCookie("dark","false",30).value;
  }
  if(darkMode == "true") {
    document.querySelectorAll("*").forEach(el => el.classList.add("dark-theme"));
    switcher.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }else{
    switcher.innerHTML = '<i class="bi bi-brightness-low"></i>';
  }
  themeInit();
}