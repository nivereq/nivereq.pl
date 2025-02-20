'use client'

import { Age, TimeOffset } from "@/components/Date";
import { Socials } from "@/components/Socials";
import { updateLang } from "@/components/updateLang"


export default function App() {

    return (
        <div>
          <nav>
            <h1>nivereq.pl</h1>
          </nav>
      <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            {Socials()}
        <main className="items-center">
          <section>
            <h2>About Me:</h2>
            <p>👨 I'm {Age()} and from the <a href="https://www.google.com/maps/place/Tr%C3%B3jmiasto/" target="_blank">Tricity area</a> in Poland.</p>
            <p>🦊 I'm a furry, and my fursona is an Arctic fox.</p>
            {TimeOffset()}
            <p>📷 I love taking photos—animals, nature, and even still life.</p>
            <p>❣️ Huge animal lover.</p>
            <p>💻 Passionate about coding.</p>
            <p>🥧 I can bake, my specialty is sweet yeast buns.</p>
            <p>🍝 Big fan of Italian food.</p>
            <p>🎧 Obsessed with <a href="https://open.spotify.com/artist/0Y6dVaC9DZtPNH4591M42W" target="_blank">Tv Girl</a> and 2010s bangers.</p>
          </section>
        
          
    
    
        </main>
        
      </div>
    
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          &copy;2025 by nivereq | all rights secured 🔒| crafted with pride by a furry. 🐾 ~ <a href="../">polski</a>
        </footer>
      {updateLang()}
      </div>
      
    );
}
