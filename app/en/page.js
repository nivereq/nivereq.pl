'use client'

import { Age, TimeOffset } from "@/components/Date";
import { CustomStatus, SpotifyStatus } from "@/components/Lanyard";
import { Socials } from "@/components/Socials";
import { updateLang } from "@/components/updateLang"
import { Navigation } from "@/components/Navigation";

export default function App() {

    return (
        <div>
            {Navigation([])}
      <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            {Socials()}
            {SpotifyStatus()}
            {CustomStatus()}
        <main className="items-center">
          <section>
            <h2>About Me:</h2>
            <p>👨 I'm {Age()} and from the <a href="https://www.google.com/maps/place/Tr%C3%B3jmiasto/" target="_blank">Tricity area</a> in Poland.</p>
            <p>🦊 I'm a <a href="https://en.wikipedia.org/wiki/Furry_fandom" target="_blank">furry</a>, and my fursona is an Arctic fox.</p>
            {TimeOffset()}
            <p>📷 I love taking photos—animals, nature, and even still life.</p>
            <p>❣️ Huge animal lover.</p>
            <p>💻 Passionate about coding.</p>
            <p>🥧 I can bake, my specialty is sweet yeast buns.</p>
            <p>🍝 Big fan of Italian food.</p>
            <p>🎧 Obsessed with <a href="https://open.spotify.com/artist/0Y6dVaC9DZtPNH4591M42W" target="_blank">Tv Girl</a> and 2010s bangers.</p>
            <p>🌍 I dream of traveling across Europe and visiting the USA.</p>
            <p>🔢 My favorite numbers are 7, 18, and 760.</p>
            <p>🎨 Beginner graphic designer, making Minecraft thumbnails.</p>
          </section>
        
          
    
    
        </main>
        
      </div>
    
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          &copy;2025 by nivereq | all rights reserved 🔒| crafted with pride by a cute furry. 🐾 ~ <a href="../">polski</a>
        </footer>
      {updateLang()}
      </div>
      
    );
}
