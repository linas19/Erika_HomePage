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
  console.log('slug  : ', latest.slug);

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
      <LatestPost
        heroImage={latest.heroImage.fields.file.url}
        title={latest.title}
        description={latest.description}
        slug={latest.slug}
      />
      <BlogNavBar />
      <div className={styles.blogTable}>
        <div className={styles.blogTableFirstRow}>
          <BlogContentTable
            heroImage={latest.heroImage.fields.file.url}
            title={latest.title}
            description={latest.description}
            slug={latest.slug}
          />
          <BlogContentTable
            heroImage={second.heroImage.fields.file.url}
            title={second.title}
            description={second.description}
            slug={second.slug}
          />
          <BlogContentTable
            heroImage={third.heroImage.fields.file.url}
            title={third.title}
            description={third.description}
            slug={third.slug}
          />
        </div>
        <div className={styles.blogTableSecondRow}>
          <BlogContentTable
            heroImage={fourth.heroImage.fields.file.url}
            title={fourth.title}
            description={fourth.description}
            slug={fourth.slug}
          />
          <BlogContentTable
            heroImage={fifth.heroImage.fields.file.url}
            title={fifth.title}
            description={fifth.description}
            slug={fifth.slug}
          />
          <BlogContentTable
            heroImage={sixth.heroImage.fields.file.url}
            title={sixth.title}
            description={sixth.description}
            slug={sixth.slug}
          />
        </div>
      </div>

      {/* <div className="posts">
        {posts.map((p) => {
          return (
            <LatestPost
              heroImage={p.heroImage.fields.file.url}
              // key={p.date}
              // date={p.date}
              // image={p.image}
              // title={p.title}
            />
          );
        })}
      </div> */}
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
