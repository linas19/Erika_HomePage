import styles from "./BlogContentTable.module.scss";

function BlogContentTable({ title, heroImage, description, slug }) {
  console.log('slug:', slug)
  return (
    <div className={styles.blogContentTable}>
      <a className={styles.blogContentTableLink} href={`/blog/${slug}`}>
        <div
          className={styles.blogContentTableImage}
          style={{backgroundImage: `url(https:${heroImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        ></div>
        <div className={styles.blogContentTableTitle}>{title}</div>
      </a>
      <div className={styles.blogContentTableDescription}>{description}</div>
    </div>
  );
}

export default BlogContentTable;
