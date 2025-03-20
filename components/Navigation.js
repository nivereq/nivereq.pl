'use client'

import { ProfilePhoto } from "@/components/Lanyard";

export function Navigation(disabled){
    return(
        <nav>
            <div className="brand items-center justify-items-center">
            {ProfilePhoto()}<a href="/"><h1 className="anim-text-spacing">nivereq.pl</h1></a>
            </div>
        </nav>
    )
}