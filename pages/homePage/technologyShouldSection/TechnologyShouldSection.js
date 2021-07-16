import Image from "next/image.js";
import GetInTouchButton from "../../../components/GetInTouchButton/GetInTouchButton.js";
import styles from "./TechnologyShouldSection.module.scss";

export default function TechnologyShouldSection() {
  return (
    <div className={styles.technologyShouldSection}>
      <div className={styles.secondPageBottomLeft}>
        <div className={styles.secondPageBottomLeftTitle}>
          Technology should work for you
        </div>
        <div className={styles.secondPageBottomLeftText}>
          <p>
            Let’s be honest - creating a successful tech product that people
            love is hard. You have to juggle ever-changing stakeholder
            expectations, user needs with sometimes strict deadlines and tight
            budgets on top of it all.
          </p>
          <p>
            What tech solution will work for your product shouldn’t be yet
            another thing for you to worry about.
          </p>
          <p>
            I’m here to help you navigate through the murky waters of
            technology, so you can focus on realising your idea.
          </p>
        </div>
        <div className={styles.getInTouch}>
          <GetInTouchButton />
        </div>
      </div>
      <div className={styles.secondPageBottomRight}>
        <Image
          src="/example-scene-2.png"
          width={744.66}
          height={594.92}
          alt="Image2"
        />
      </div>
    </div>
  );
}
