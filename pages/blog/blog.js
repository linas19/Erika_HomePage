import styles from "./blog.module.scss";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import Head from "next/head";
import React, { useState } from "react";

import { fetchEntries } from "./util/contentfulPosts.js";
import LatestPost from "../components/LatestPost/LatestPost.js";
import BlogNavBar from "../components/BlogNavBar/BlogNavBar.js";
import BlogContentTable from "../components/BlogContentTable/BlogContentTable.js";

export default function Blog({ posts }) {
  const [highlightedButton, setHighlightedButton] = useState("all");
  const latest = posts[posts.length - 1];
  const remainingPosts = posts.slice(0, posts.length - 1);
  const filteredPosts = remainingPosts.filter((post) => {
    if (highlightedButton === "all") {
      return true;
    }
    return post.tags && post.tags.includes(highlightedButton);
  });
  console.log(remainingPosts);

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
      <NavBar blog={true} />
      <LatestPost
        heroImage={latest.heroImage.fields.file.url}
        title={latest.title}
        description={latest.description}
        slug={latest.slug}
      />
      <BlogNavBar onClick={setHighlightedButton} />
      <div className={styles.blogTableFirstRowDetail}>
        {filteredPosts.map((post) => {
          return (
            <BlogContentTable
              key={post.slug}
              heroImage={post.heroImage.fields.file.url}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  ); 
}
export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
