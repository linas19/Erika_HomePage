import styles from "./LatestPost.module.scss";
import Image from "next/image.js";

function LatestPost({
  title,
  slug,
  heroImage,
  description,
  body,
  author,
  publishDate,
  tags,
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
    // <div className="post">
    //   <img alt={description} src={`https:${file.url}`} />
    //   <div className="description">{description}</div>
    //   <div className="text">
    //     <h2>{title}</h2>
    //     <h3>{date}</h3>
    //   </div>
    // </div>
  );
}

export default LatestPost;
