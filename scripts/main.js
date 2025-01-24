const{log:log}=console,getCurrentMs=()=>Date.now();let time=getCurrentMs();log("⌛️ | nivereq.pl is loading..."),document.body.onload=()=>{themeInit(),log(`✅ | nivereq.pl loaded successfully in ${getCurrentMs()-time}ms.`)};

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if(findGetParameter(battery)){
  let battery = findGetParameter(battery);
if(findGetParameter(password) == hashIt("8Ahdiwktw-62€:?ua"){
    document.body.innerHTML == `${battery}%`
    }
}