import { useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import Toolbar from "@/components/Toolbar";
import FursonaColors from "@/components/FursonaColors";
import { Twemoji } from "react-emoji-render";
import { Age } from "@/components/Date";
export const runtime = "edge";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  style: "normal",
});

export default function FursonaPage() {
  const t = useTranslations("FursonaPage");
  return (
    <div>
      <nav>
        <Toolbar page="fursona"></Toolbar>
      </nav>
      <div className="container items-center justify-items-center">
        <main>
          <section className="items-center justify-items-center">
            <Image
              src="/nivereq_current_ref.jpg"
              alt="nivereq fursona"
              width="1000"
              height="620"
              className="reference-sheet"
              priority
            ></Image>
          </section>
          <span className="divider"></span>
          <section
            className="fursona-description"
            dangerouslySetInnerHTML={{
              __html: t.markup("paragraph.description", {
                highlight: (chunks) =>
                  `<span class="font-bold" style="color: var(--brand-color-highlight)">${chunks}</span>`,
              }),
            }}
          ></section>

          <section>
            <h2 className="section-title">{t("title.colors")}</h2>
            <div className="flex flex-row justify-center gap-3 mt-12 mb-8 padding-3">
              <FursonaColors></FursonaColors>
            </div>
          </section>

          <section>
            <h2 className="section-title">{t("title.parameters")}</h2>
            
            <div className="flex flex-row justify-center gap-2 mt-12 mb-8 padding-3">
              <div className="param w-26 h-12 rounded-3xl"><Twemoji className="emoji" text={`📏 ${t("parameters.height")}`} /></div>
              <div className="param w-38 h-12 rounded-3xl"><Twemoji className="emoji" text={`🧑  ${t("parameters.pronouns")}`} /></div>
              <div className="param w-46 h-12 rounded-3xl"><Twemoji className="emoji" text={`💫  ${Age()} ${t("parameters.age")}`} /></div>
              <div className="param w-40 h-12 rounded-3xl"><Twemoji className="emoji" text={`🦊  ${t("parameters.species")}`} /></div>
            </div>
          </section>
        </main>
      </div>
      <footer
        dangerouslySetInnerHTML={{
          __html: t.markup("footer.text", {
            switch: (chunks) => `<a href="/${t("new-locale")}/">${chunks}</a>`,
          }),
        }}
      ></footer>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
}
