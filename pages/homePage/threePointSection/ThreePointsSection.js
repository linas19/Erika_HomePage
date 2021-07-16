import Image from "next/image.js";
import GetInTouchButton from "../../../components/GetInTouchButton/GetInTouchButton.js";
import styles from "./ThreePointsSection.module.scss";

export default function SecondSection() {
  return (
    <div className={styles.secondSection}>
      <div className={styles.threePointsBackGround}>
        <div className={styles.threePoints}>
          <div className={styles.solution}>
            <div className={styles.solutionBox}>
              <div className={styles.solutionBackRec}></div>
              <div className={styles.solutionTitle}>Solution</div>
              <div className={styles.solutionText}>
                Development work can sometimes feel like a mystery, so I work
                closely with your product and design teams to help them explore
                solutions and define a product roadmap that meets your goals.
              </div>
            </div>
          </div>
          <div className={styles.technology}>
            <div className={styles.technologyBox}>
              <div className={styles.technologyBackRec}></div>
              <div className={styles.technologyTitle}>Technology</div>
              <div className={styles.technologyText}>
                Building an app that is both stable and scalable is not easy but
                I have been fortunate to have worked with some of the latest
                Javascript technologies on a variety of problems. I adapt my
                approach to meet the specific needs of your team and product.
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <div className={styles.experienceBox}>
              <div className={styles.experienceBackRec}></div>
              <div className={styles.experienceTitle}>Experience</div>
              <div className={styles.experienceText}>
                I have helped define and develop applications and features for
                global corporates as well as early-stage startups and industries
                ranging from social media management to sports TV to consumer
                analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
