import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { site } from "@/data/site";
import styles from "./OpeningHours.module.css";

type OpeningHoursProps = {
  lang: Lang;
};

export function OpeningHours({ lang }: OpeningHoursProps) {
  return (
    <dl className={styles.hours}>
      {site.hours.map((row) => (
        <div key={row.days.en} className={styles.row}>
          <dt>{row.days[lang]}</dt>
          <dd>{row.time ?? dictionary.hours.closed[lang]}</dd>
        </div>
      ))}
    </dl>
  );
}
