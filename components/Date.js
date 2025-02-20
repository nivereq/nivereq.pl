import { useEffect, useState } from "react";

export function Age(){
    let bdayMs = new Date("2008-05-03").getTime();
    let currentMs = new Date().getTime();
    let diff = currentMs - bdayMs;

    return Math.floor((diff / (1000 * 3600 * 24 * 365.25)));
}


export function TimeOffset(){
      

    let utcDate = new Date();
    utcDate.setHours(0, 0, 0, 0);
    let strDateWWA = utcDate.toLocaleString("en-US", {
        timeZone: "Europe/Warsaw",
    });
    let offset = parseFloat((new Date(strDateWWA) - utcDate) / (1000 * 60 * 60));

    if(offset < 0){
        return <p>⏰ Your time is {offset * -1}h behind mine (<a target="_blank" href="https://time.is/Warsaw">Europe/Warsaw</a>).</p>;
    }else if(offset > 0){
        return <p>⏰ Your time is ${Math.trunc(offset)}h ahead of mine (<a target="_blank" href="https://time.is/Warsaw">Europe/Warsaw</a>).</p>;
    }else{
        return <p>⏰ My timezone is <a target="_blank" href="https://time.is/Warsaw">Europe/Warsaw.</a></p>;
    }

}
    
    

