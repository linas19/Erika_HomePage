import Image from "next/image.js";
import GetInTouchButton from "../../components/GetInTouchButton/GetInTouchButton.js";
import styles from "./AlexSection.module.scss";

export default function AlexSection() {
  return (
    <div className={styles.alexSection}>
      <div className={styles.alexSectionText}>
        <p>
          I’ve been really impressed in my time working with Erika in her role
          as one of the leading developers in the Eurosport team.
        </p>
        <p>
          I find Erika astute, approachable and engaging - she takes the time
          and effort to walk through implications and options for decisions we
          need to make and is a really solid trusted sounding board on technical
          feasibility and approaches to requirements needs.
        </p>
        <p>
          On top of being a really good developer and really hard working, Erika
          is a joy to work with from a business and stakeholder engagement
          perspective and I hope to work with her again in the future.
        </p>
      </div>
      <div className={styles.alexSectionAuthor}>
        Alex Brown, Senior Product Manager at Eurosport
      </div>
    </div>
  );
}
