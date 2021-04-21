import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftTitle}>JONIKA</div>
          <div className={styles.footerLeftButtons}>
            <Link href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} height="30px" />
            </Link>
            <Link href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedinIn} height="30px" />
            </Link>
            <Link href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} height="30px" />
            </Link>
          </div>
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
