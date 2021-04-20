import styles from "./MagicSection.module.scss";
import React from "react";

export default function MagicSection() {
  return (
    <div className={styles.magicSection}>
      <div className={styles.magicSectionTitle}>How the magic happens:</div>
      <div className={styles.magicSectionBottom}>
        <div className={styles.magicSectionPoints}>
          <div className={styles.magicSectionPointNumber}>1.</div>
          <div className={styles.magicSectionPointSquare}></div>
          <div className={styles.magicSectionPointNumber}>2.</div>
          <div className={styles.magicSectionPointSquare}></div>
          <div className={styles.magicSectionPointNumber}>3.</div>
        </div>
        <div className={styles.magicSectionPointText}>
          <div className={styles.magicSectionPointTextBox}>
            <div className={styles.magicSectionPointTextTitle}>Let's chat</div>
            <div className={styles.magicSectionPointTextText}>
              It all starts with a small first step - getting in touch
            </div>
          </div>
          <div className={styles.magicSectionPointTextBox}>
            <div className={styles.magicSectionPointTextTitle}>Prep and plan</div>
            <div className={styles.magicSectionPointTextText}>
              Every project has its own needs. I will work with you to
              understand your unique requirements and expectations before we
              agree on a plan of action
            </div>
          </div>
          <div className={styles.magicSectionPointTextBox}>
            <div className={styles.magicSectionPointTextTitle}>
              Let’s get it done
            </div>
            <div className={styles.magicSectionPointTextText}>
              I will work alongside your existing team or bring together a group
              of trusted freelancers to realise your idea on budget and on time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
