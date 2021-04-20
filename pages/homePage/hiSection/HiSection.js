import Image from "next/image.js";
import styles from "./HiSection.module.scss";
import Link from "next/link";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HiSection() {
  return (
    <div className={styles.hiSection}>
      <div className={styles.hiSectionLeft}>
        <div className={styles.hiSectionLeftImage}>
          <Image src="/Erika.png" width={500} height={558} alt="Image2" />
        </div>
      </div>
      <div className={styles.hiSectionRight}>
        <div className={styles.hiSectionRightText}>
          <div className={styles.hiSectionRightTextIntro}>
            Hi, I’m Erika. Nice to meet you!
          </div>
          <div className={styles.hiSectionRightTextDescription}>
            I am a full stack JavaScript developer with a passion for creating
            user-centric tech products. For more than five years, I have helped
            companies both big and small to bring new products and features into
            the hands of their users.
          </div>
          <div className={styles.hiSectionButtons}>
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
        </div>
      </div>
    </div>
  );
}
