import styles from "../blog.module.scss";
import NavBar from "../../../components/NavBar/NavBar.js";
import Footer from "../../../components/Footer/Footer.js";
import Head from "next/head";
import React from "react";
import { fetchEntries } from "../util/contentfulPosts.js";
import BlogContentTable from "../../../components/BlogContentTable/BlogContentTable.js";
import BlogDetailContent from "../../../components/BlogDetailContent/BlogDetailContent.js";

export default function BlogDetail({ relatedPosts, post }) {
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
      <BlogDetailContent
        heroImage={post.heroImage.fields.file.url}
        title={post.title}
        author={post.author && post.author.fields.name}
        authorImage={post.author && post.author.fields.image.fields.file.url}
        publishDate={post.publishDate}
        body={post.body}
      />
      <div className={styles.youMay}>You may also like:</div>
      <div className={styles.blogTableFirstRowDetail}>
        {relatedPosts.map((relatedPost) => {
          return (
            <BlogContentTable
              key={relatedPost.slug}
              heroImage={relatedPost.heroImage.fields.file.url}
              title={relatedPost.title}
              description={relatedPost.description}
              slug={relatedPost.slug}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ params }) {
  const res = await fetchEntries(params.slug);
  const posts = await res.map((p) => {
    return p.fields;
  });
  const post = posts[0];
  const relatedPostsRes = await fetchEntries(undefined, post.tags && post.tags[0], 3);
  const relatedPosts = await relatedPostsRes.map((p) => {
    return p.fields;
  });
  return {
    props: {
      post: posts[0],
      relatedPosts,
    },
  };
}
export async function getStaticPaths() {
  const res = await fetchEntries();
  const paths = await res.map((p) => {
    return {
      params: { slug: p.fields.slug },
    };
  });
  return { paths, fallback: false };
}
