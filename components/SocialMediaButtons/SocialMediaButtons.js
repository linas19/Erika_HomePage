import styles from "./SocialMediaButtons.module.scss";
import Link from "next/link.js";
import React from "react";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaButtons({ instagramLink, linkedInLink, twitterLink }) {
  return (
    <div className={styles.underImageLeftButtons}>
      <Link href={instagramLink}>
        <FontAwesomeIcon className={styles.button} icon={faInstagram} height="30px" />
      </Link>
      <Link href={linkedInLink}>
        <FontAwesomeIcon className={styles.button} icon={faLinkedinIn} height="30px" />
      </Link>
      <Link href={twitterLink}>
        <FontAwesomeIcon className={styles.button} icon={faTwitter} height="30px" />
      </Link>
    </div>
  );
}

export default SocialMediaButtons;
