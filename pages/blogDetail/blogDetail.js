import styles from "./blogDetail.module.scss";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import Head from "next/head";
import React from "react";
import { fetchEntries } from "./util/contentfulPosts.js";
import BlogContentTable from "../components/BlogContentTable/BlogContentTable.js";
import BlogDetailContent from "../components/BlogDetailContent/BlogDetailContent.js";

export default function BlogDetail({ posts }) {
  console.log(posts[0].publishDate);
  return (
    <div className={styles.blog}>
      <Head>
        <title>BLOG</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <NavBar />
      <BlogDetailContent
        heroImage={posts[0].heroImage.fields.file.url}
        title={posts[0].title}
        author={posts[0].author.fields.name}
        authorImage={posts[0].author.fields.image.fields.file.url}
        publishDate={posts[0].publishDate}
        body={posts[0].body}
      />
      <div className={styles.youMay}>You may also like:</div>
      <div className={styles.blogTableFirstRow}>
        <BlogContentTable
          heroImage={posts[3].heroImage.fields.file.url}
          title={posts[3].title}
          description={posts[3].description}
          slug={posts[3].slug}

        />
        <BlogContentTable
          heroImage={posts[1].heroImage.fields.file.url}
          title={posts[1].title}
          description={posts[1].description}
          slug={posts[1].slug}

        />
        <BlogContentTable
          heroImage={posts[2].heroImage.fields.file.url}
          title={posts[2].title}
          description={posts[2].description}
          slug={posts[2].slug}
        />
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries();
  console.log(res);
  const posts = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      posts,
    },
  };
}
