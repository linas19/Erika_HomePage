import styles from "./BlogContentTable.module.scss";

function BlogContentTable({ title, heroImage, description, slug }) {
  console.log('slug:', slug)
  return (
    <div className={styles.blogContentTable}>
      <a className={styles.blogContentTableLink} href={`/blog/${slug}`}>
        <img
          className={styles.blogContentTableImage}
          src={`https:${heroImage}`}
          width={683 / 2}
          height={429 / 2}
        />
        <div className={styles.blogContentTableTitle}>{title}</div>
      </a>
      <div className={styles.blogContentTableDescription}>{description}</div>
    </div>
  );
}

export default BlogContentTable;
