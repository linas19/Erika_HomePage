import Image from "next/image.js";
import styles from "./HiSection.module.scss";
import SocialMediaButtons from "../../components/SocialMediaButtons/SocialMediaButtons.js";

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
          <SocialMediaButtons
            instagramLink={"https://www.instagram.com/"}
            linkedInLink={"https://www.linkedin.com/"}
            twitterLink={"https://www.twitter.com/"}
          />
        </div>
      </div>
    </div>
  );
}
