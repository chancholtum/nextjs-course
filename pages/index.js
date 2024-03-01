import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>CC' Blog</title>
        <meta
          name="description"
          content="I post about programing and web development."
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

// 1.Hero => Present ourselves
// 2.featrue
