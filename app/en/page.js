'use client'

import { Age, TimeOffset } from "@/components/Date";
import { CustomStatus, SpotifyStatus } from "@/components/Lanyard";
import { Socials } from "@/components/Socials";
import { updateLang } from "@/components/updateLang"
import dynamic from 'next/dynamic'
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
            <p>🏳️‍🌈 I'm <a href="https://en.wikipedia.org/wiki/Bisexuality" target="_blank">Bisexual</a>.</p>
            <p>🦊 I'm a <a href="https://en.wikipedia.org/wiki/Furry_fandom" target="_blank">furry</a>, and my <a href="nivereq_current_ref.png" target="_blank">fursona</a> is an Arctic fox.</p>
            {TimeOffset()}
            <p>📷 I love taking photos—animals, nature, and even still life.</p>
            <p>💖 Taken by my cutie :3.</p>
            <p>💻 Passionate about coding.</p>
            <p>🥧 I can bake, my specialty is sweet yeast buns.</p>
            <p>🍝 Big fan of Italian food.</p>
            <p>🎧 My music taste is pure chaos — <a href="https://open.spotify.com/playlist/1PQZoPUTBUS8UUxgLKet50?si=cac38bcaa01d4504" target="_blank">here’s my playlist</a>.</p>
            <p>🌍 I dream of traveling across Europe and visiting the USA.</p>
            <p>🔢 My favorite numbers are 7, 18, and 760.</p>
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
