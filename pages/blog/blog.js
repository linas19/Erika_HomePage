import styles from "./blog.module.scss";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import Head from "next/head";
import React from "react";
import { fetchEntries } from "./util/contentfulPosts.js";
import LatestPost from "../components/LatestPost/LatestPost.js";
import BlogNavBar from "../components/BlogNavBar/BlogNavBar.js";
import BlogContentTable from "../components/BlogContentTable/BlogContentTable.js";

export default function Blog({ posts }) {
  const latest = posts[posts.length - 1];
  const second = posts[posts.length - 2];
  const third = posts[posts.length - 3];
  const fourth = posts[posts.length - 4];
  const fifth = posts[posts.length - 5];
  const sixth = posts[posts.length - 6];
  console.log("slug  : ", latest.slug);

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
      <BlogNavBar />
      <div className={styles.blogTableFirstRowDetail}>
        {posts.map((post) => {
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
