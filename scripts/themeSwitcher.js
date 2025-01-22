const switchTheme = () => {
  let darkMode = getCookie("dark")=="true" ? true : setCookie("dark","false", 30).value;
  if(darkMode) {
    document.querySelectorAll("*").forEach(el => el.classList.add("theme-dark"));
  }
    document.querySelectorAll("*").forEach(el => {
      if(el.classList.contains("theme-dark") {
        el.classList.remove("theme-dark");
        setCookie("dark", false, 30);
        darkMode = false;
      }
      else{
        el.classList.add("theme-dark");
        setCookie("dark", true, 30);
        darkMode = true;
      }
    return darkMode;
    })
}
