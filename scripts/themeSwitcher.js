const switchTheme = () => {
  let darkMode = getCookie("dark") ? getCookie("dark") : setCookie("dark",true, 30).value;
  if(darkMode) document.querySelectorAll("*").forEach(el => el.classList.add("theme-dark"));
    document.querySelectorAll("*").forEach(el => {
      if(el.classList.contains("theme-dark") {
        el.classList.remove("theme-dark");
      }
      else{
        el.classList.add("theme-dark");
      }
    setCookie("dark", !darkMode, 30)
    })
}
