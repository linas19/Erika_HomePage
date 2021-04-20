import Image from "next/image.js";
import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton.js";
import styles from "./HiSection.module.scss";
import Link from 'next/link'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HiSection() {
  return (
    <div className={styles.hiSection}>
      <div className={styles.thirdPageTop}>
        <div className={styles.thirdPageTopLeft}>
          <div className={styles.thirdPageTopLeftImage}>
            <Image src="/Erika.png" width={753} height={840} alt="Image2" />
          </div>
        </div>
        <div className={styles.thirdPageTopRight}>
          <div className={styles.thirdPageTopRightText}>
            <div className={styles.thirdPageTopRightTextIntro}>
              Hi, I’m Erika. Nice to meet you!
            </div>
            <div className={styles.thirdPageTopRightTextDescription}>
              I am a full stack JavaScript developer with a passion for creating
              user-centric tech products. For more than five years, I have
              helped companies both big and small to bring new products and
              features into the hands of their users.
            </div>
            <div className={styles.thirdPageTopRightTextButtons}>
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
      <div className={styles.thirdPageBottom}>
        <div className={styles.thirdPageBottomText}>
          <p>
            I’ve been really impressed in my time working with Erika in her role
            as one of the leading developers in the Eurosport team.
          </p>
          <p>
            I find Erika astute, approachable and engaging - she takes the time
            and effort to walk through implications and options for decisions we
            need to make and is a really solid trusted sounding board on
            technical feasibility and approaches to requirements needs.
          </p>
          <p>
            On top of being a really good developer and really hard working,
            Erika is a joy to work with from a business and stakeholder
            engagement perspective and I hope to work with her again in the
            future.
          </p>
        </div>
        <div className={styles.thirdPageBottomAuthor}>
          Alex Brown, Senior Product Manager at Eurosport
        </div>
      </div>
    </div>
  );
}
