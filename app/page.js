'use client'

import { Age } from "@/components/Date";
import { CustomStatus, SpotifyStatus } from "@/components/Lanyard";
import { Socials } from "@/components/Socials";
import { updateLang } from "@/components/updateLang";
import { Navigation } from "@/components/Navigation";



export default function App() {
  return (
      <div>
        {Navigation([])}
        
    <div className="container items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
    {Socials()}
    {SpotifyStatus()}
    {CustomStatus()}
      <main className="items-center">
        <section>
          <h2>O mnie:</h2>
          <p>👨 Mam {Age()} lat i pochodzę z <a href="https://www.google.com/maps/place/Tr%C3%B3jmiasto/" target="_blank">Trójmiasta</a>.</p>
          <p>🦊 Jestem <a href="https://pl.wikipedia.org/wiki/Furry" target="_blank">futrzakiem</a>, a moja fursona to arktyczny lis.</p>
          <p>📷 Uwielbiam robić zdjęcia, wszystkiego co żywe, ale także i martwej natury.</p>
          <p>❣️ Kocham zwierzaczki.</p>
          <p>💻 Moją pasją jest programowanie.</p>
          <p>🥧 Potrafię piec - moim speciałem są drożdżówki.</p>
          <p>🍝 Jestem wielkim fanem kuchni włoskiej.</p>
          <p>🎧 Kocham piosenki <a href="https://open.spotify.com/artist/0Y6dVaC9DZtPNH4591M42W" target="_blank">Tv Girl</a> oraz przeboje 2010s.</p>
          <p>🌍 Marzę o podróżach po Europie i odwiedzeniu USA.</p>
          <p>🔢 Moje ulubione liczby to 7, 18 i 760.</p>
          <p>🎨 Początkujący grafik, tworzę miniaturki do Minecrafta.</p>
        </section>
      </main>
      
    </div>

    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        &copy;2025 by nivereq | wszelkie prawa zastrzeżone 🔒 | stworzone przez futrzaka. 🐾 ~ <a href="./en">english</a>
    </footer>
      {updateLang()}
    </div>
  );
}