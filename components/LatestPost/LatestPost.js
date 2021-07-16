import styles from "./LatestPost.module.scss";
import Image from "next/image.js";
import Link from "next/link.js";

function LatestPost({ title, heroImage, description, slug }) {
  return (
    <div className={styles.latestPost}>
      <div className={styles.latestPostLeft} style={{backgroundImage: `url(https:${heroImage})`, backgroundPosition: 'center',   backgroundRepeat: 'no-repeat'}}></div>
      <div className={styles.latestPostRight}>
        <div className={styles.latestPostRightLatest}>LATEST POST</div>
        <div className={styles.latestPostRightTitle}>{title}</div>
        <div className={styles.latestPostRightDescription}>{description}</div>
        <button className={styles.latestPostRightReadMore}>
          <Link className={styles.link} href={`/blog/${slug}`}>
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  );
}

export default LatestPost;
