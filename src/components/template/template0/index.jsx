'use client'
import Container from "../../container";
import MoreStories from "../../more-stories";
import HeroPost from "../../hero-post";
import Intro from "../../intro";

const Template = ({ edges }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  );
};

export default Template;
