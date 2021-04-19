import Image from "next/image.js";
import GetInTouchButton from "../components/getInTouchButton.js";
import styles from "../../styles/SecondPage.module.scss";

export default function SecondPage() {
  return (
    <div className={styles.secondPage}>
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
      <div className={styles.secondPageBottom}>
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
          <GetInTouchButton />
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
    </div>
  );
}
