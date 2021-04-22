import styles from "./BlogDetailContent.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons.js";

function BlogDetailContent({
  title,
  slug,
  heroImage,
  description,
  body,
  author,
  authorImage,
  publishDate,
  tags,
}) {
  return (
    <div className={styles.blogDetailContent}>
      <div className={styles.topImage}>
        <img src={`https:${heroImage}`} width={683} height={429} />
      </div>
      <div className={styles.underImage}>
        <div className={styles.underImageLeft}>
          <div className={styles.underImageLeftShare}>Share:</div>
          <SocialMediaButtons
            instagramLink={"https://www.instagram.com/"}
            linkedInLink={"https://www.linkedin.com/"}
            twitterLink={"https://www.twitter.com/"}
          />
        </div>
        <div className={styles.underImageRight}>
          <div className={styles.underImageRightTitle}>{title}</div>
          <div className={styles.underImageRightAuthorDetails}>
            <div className={styles.underImageRightAuthorImage}>
              <img
                className={styles.underImageRightAuthorImage}
                src={`https:${authorImage}`}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.underImageRightAuthor}>{author}</div>
            <div className={styles.underImageRightAuthorDate}>
              / {publishDate}
            </div>
          </div>
          <div className={styles.underImageRightBody}>
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailContent;
