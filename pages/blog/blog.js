import styles from "../../styles/blog.module.scss";
import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import Head from "next/head";
import React from "react";
import { fetchEntries } from "./util/contentfulPosts.js";
import LatestPost from "../components/LatestPost/LatestPost.js";
import BlogNavBar from "../components/BlogNavBar/BlogNavBar.js"

export default function Blog({posts}) {

  console.log(posts[posts.length - 1]);
  const latest = posts[posts.length - 1];

  return (
    <div>
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
      <LatestPost heroImage={latest.heroImage.fields.file.url} title={latest.title} description={latest.description}/>
      <BlogNavBar />
      {/* <div className="posts">
        {posts.map((p) => {
          console.log('hedflljho', p.heroImage.fields.file.url)
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
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}