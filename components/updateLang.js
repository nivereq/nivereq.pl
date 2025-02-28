'use client'

export function updateLang(){
    return(
        <script>
            let lang = window.location.pathname.split("/")[1].toLowerCase();
            if(lang) document.documentElement.lang = lang; 
        </script>
        
    )
}