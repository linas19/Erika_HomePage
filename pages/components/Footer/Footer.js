import styles from "./Footer.module.scss";
import Link from "next/link";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons.js";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftTitle}>JONIKA</div>
          <SocialMediaButtons
            instagramLink={"https://www.instagram.com/"}
            linkedInLink={"https://www.linkedin.com/"}
            twitterLink={"https://www.twitter.com/"}
          />
          <div className={styles.footerLeftEmail}>
            <Link href="https://hello@jonika.io/">hello@jonika.io</Link>
          </div>
          <div className={styles.footerLeftAddress}>
            <div>86 - 90 Paul Street</div>
            <div>London</div>
            <div>EC2 4NE</div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerLeftLink}>
            <Link href="https://hello@jonika.io/">Terms and Conditions</Link>
          </div>
          <div className={styles.footerLeftLink}>
            <Link href="https://hello@jonika.io/">Privacy Policy</Link>
          </div>
          <div className={styles.footerLeftLink}>
            <Link href="https://hello@jonika.io/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
