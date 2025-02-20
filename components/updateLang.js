'use client'


export function updateLang(){
    return(
        <script>
            let lang = window.location.pathname.split("/")[1].toLowerCase();
            document.documentElement.lang = lang || "pl"; 
            

        </script>
        
    )
}