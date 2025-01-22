let darkMode = "falss";

function switchTheme(){
    themeInit();
    document.querySelectorAll("*").forEach(el => {
      if(el.classList.contains("theme-dark")) {
        el.classList.remove("theme-dark");
        setCookie("dark", "false", 30);
      }
      else{
        el.classList.add("theme-dark");
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
    document.querySelectorAll("*").forEach(el => el.classList.add("theme-dark"));
  }
}