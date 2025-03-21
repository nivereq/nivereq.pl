'use client'

import { ProfilePhoto } from "@/components/Lanyard";

export function Navigation(){
    return(
        <nav>
            <div className="brand items-center justify-items-center">
            {ProfilePhoto()}<h1 className="anim-text-spacing">nivereq.pl</h1>
            </div>
        </nav>
    )
}