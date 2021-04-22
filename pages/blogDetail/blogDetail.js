import styles from "./blogDetail.module.scss";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import Head from "next/head";
import React from "react";
import { fetchEntries } from "./util/contentfulPosts.js";
import LatestPost from "../components/LatestPost/LatestPost.js";
import BlogNavBar from "../components/BlogNavBar/BlogNavBar.js";
import BlogContentTable from "../components/BlogContentTable/BlogContentTable.js";
import BlogDetailContent from "../components/BlogDetailContent/BlogDetailContent.js";

export default function BlogDetail({ posts }) {
  console.log(posts[0].publishDate)
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
        <BlogDetailContent heroImage={posts[0].heroImage.fields.file.url} title={posts[0].title} author={posts[0].author.fields.name} authorImage={posts[0].author.fields.image.fields.file.url} publishDate={posts[0].publishDate} body={posts[0].body}/>
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
