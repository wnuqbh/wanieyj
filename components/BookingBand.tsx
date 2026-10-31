import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { OpeningHours } from "./OpeningHours";
import styles from "./BookingBand.module.css";

type BookingBandProps = {
  lang: Lang;
};

export function BookingBand({ lang }: BookingBandProps) {
  const booking = dictionary.booking;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name)}&query_place_id=${site.googlePlaceId}`;

  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.label}>{booking.label[lang]}</p>
          <h2 className={styles.heading}>{booking.heading[lang]}</h2>
          <p>{booking.text[lang]}</p>
          <a className={styles.button} href={whatsappLink(lang)}>
            {dictionary.cta.book[lang]}
          </a>
        </div>

        <div>
          <p className={styles.label}>{booking.visit[lang]}</p>
          <address className={styles.address}>{site.address}</address>
          <OpeningHours lang={lang} />
          <a className={styles.link} href={directions}>
            {dictionary.cta.directions[lang]} →
          </a>
        </div>
      </div>
    </section>
  );
}
