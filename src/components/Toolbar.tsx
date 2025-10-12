import Link from "next/link";
import { useTranslations } from "next-intl";
export default function Toolbar({ page }: { page: string }) {
  const t = useTranslations("Toolbar");
  return (
    <div className="toolbar">
      <Link href="/">
        <h1 className="anim-text-spacing">nivereq.pl</h1>
      </Link>
      {page === "home" ? (
        <Link href="/fursona" className="toolbar-link active">
          {t("fursona")}
        </Link>
      ) : (
        <Link href="/" className="toolbar-link active">
          {t("home")}
        </Link>
      )}
    </div>
  );
}
