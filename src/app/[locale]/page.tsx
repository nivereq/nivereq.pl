import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ProfilePhoto, CustomStatus } from '@/components/Lanyard';
import { Age } from '@/components/Date';
import SocialMedia from '@/components/SocialMedia';
import { Inconsolata } from 'next/font/google';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export const runtime = "edge";

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  style: 'normal'
})


export default function HomePage() {
  const t = useTranslations('HomePage');
  return (

    <div>
      <nav>
        <Link href="/"><h1 className="anim-text-spacing">nivereq.pl</h1></Link>
      </nav>
      <div className="container items-center justify-items-center min-h-screen">
        <main>
          <section className="items-center profile justify-items-center">
            <div className="brand">
              <ProfilePhoto></ProfilePhoto>
              <h2 className={`nickname ${inconsolata.className}`}>nivereq</h2>
            </div>
            <div className="status">
              <CustomStatus></CustomStatus>
            </div>

            <SocialMedia></SocialMedia>
          </section>
          <span className="divider"></span>
          <section>
            <h2 className='section-title'>{t("title.aboutme")}</h2>
            <p dangerouslySetInnerHTML={{
              __html: t.markup('paragraph.iam', {
                age: chunks => Age().toString(),
                city: chunks => `<a href='https://www.google.com/maps/place/Tr%C3%B3jmiasto/' target='_blank' rel='noopener noreferrer'>${chunks}</a>`,
              })
            }}></p>
            <p dangerouslySetInnerHTML={{
              __html: t.markup('paragraph.orientation', {
                orientation: chunks => `<a href='https://wikipedia.org/wiki/Bisexuality' target='_blank' rel='noopener noreferrer'>${chunks}</a>`,
              })
            }}></p>
            <p dangerouslySetInnerHTML={{
              __html: t.markup('paragraph.fandom', {
                furry: chunks => `<a href='https://wikipedia.org/wiki/Furry_fandom' target='_blank' rel='noopener noreferrer'>${chunks}</a>`,
                furref: chunks => `<a href='/nivereq_current_ref.png' target='_blank' rel='noopener noreferrer'>${chunks}</a>`,
              })
            }}></p>
            <p>{t('paragraph.relationship')}</p>
            <p dangerouslySetInnerHTML={{
              __html: t.markup('paragraph.musictaste', {
                playlist: chunks => `<a href='https://open.spotify.com/playlist/1PQZoPUTBUS8UUxgLKet50?si=cac38bcaa01d4504m' target='_blank' rel='noopener noreferrer'>${chunks}</a>`,
              })
            }}></p>
            <p>{t('paragraph.passion1')}</p>
            <p>{t('paragraph.dream')}</p>
            <p>{t('paragraph.passion2')}</p>
            <p>{t('paragraph.favnums')}</p>
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