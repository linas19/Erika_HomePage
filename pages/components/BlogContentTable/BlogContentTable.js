import styles from "./BlogContentTable.module.scss";

function BlogContentTable({
  title,
  heroImage,
  description,
}) {
  return (
    <div className={styles.blogContentTable}>
        <img  className={styles.blogContentTableImage} src={`https:${heroImage}`} width={683/2} height={429/2} />
        <div className={styles.blogContentTableTitle}>{title}</div>
        <div className={styles.blogContentTableDescription}>{description}</div>
    </div>
  );
}

export default BlogContentTable;
