import Image from "next/image.js";
import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton.js";
import styles from "./CompetitionSection.module.scss";

export default function CompetitionSection() {
  return (
    <div className={styles.competitionSection}>
      <div className={styles.competitionSectionLeft}>
        <div className={styles.competitionSectionLeftTitle}>
          Don’t let your competition beat you to market
        </div>
        <GetInTouchButton />
      </div>
      <div className={styles.competitionSectionRight}>
        <Image
          src="/woman-scooter.png"
          width={544}
          height={519}
          alt="Image2"
        />
      </div>
    </div>
  );
}
