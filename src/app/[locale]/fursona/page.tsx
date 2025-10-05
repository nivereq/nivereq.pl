import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ProfilePhoto, CustomStatus } from '@/components/Lanyard';
import { Age } from '@/components/Date';
import SocialMedia from '@/components/SocialMedia';
import { Inconsolata } from 'next/font/google';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Toolbar from '@/components/Toolbar';

export const runtime = "edge";

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  style: 'normal'
})


export default function FursonaPage() {
  const t = useTranslations('FursonaPage');
  return (

    <div>
      <nav>
        <Toolbar page="fursona"></Toolbar>
      </nav>
      <div className="container items-center justify-items-center min-h-screen">
        <main>
          <section className="items-center justify-items-center">
            <Image src="/nivereq_current_ref.png" alt="nivereq fursona" width="700" height="500" className="profile-photo" priority></Image>
          </section>

          <section className="items-center justify-items-center">
            <h2 className='section-title'>{t("title.colors")}</h2>
            <div className="flex flex-row justify-center gap-5 mt-12 mb-8 padding-5">
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#fc5478' }}></div>
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#b2fdef' }}></div>
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#e2faf6' }}></div>
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#f3fafa' }}></div>
            </div>
          </section>
        </main>
      </div>
      <footer dangerouslySetInnerHTML={{
        __html: t.markup('footer.text', {
          switch: chunks => `<a href="/${t('new-locale')}/">${chunks}</a>`
        })
      }}></footer>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
}