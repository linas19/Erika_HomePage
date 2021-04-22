import styles from "./LatestPost.module.scss";
import Image from "next/image.js";

function LatestPost({
  title,
  heroImage,
  description,
}) {
  return (
    <div className={styles.latestPost}>
      <div className={styles.latestPostLeft}>
        <img src={`https:${heroImage}`} width={683/1.5} height={429/1.5} />
      </div>
      <div className={styles.latestPostRight}>
        <div className={styles.latestPostRightLatest}>LATEST POST</div>
        <div className={styles.latestPostRightTitle}>{title}</div>
        <div className={styles.latestPostRightDescription}>{description}</div>
        <div className={styles.latestPostRightReadMore}>READ MORE</div>
      </div>
    </div>
  );
}

export default LatestPost;
