'use client'
import Container from "../../container";
import Intro from "../../intro";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

const Template = ({ edges }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  const headerPosts = morePosts.splice(0, 4);

  return (
    <div className="container mx-auto px-5">
      <Intro />

      <section style={{}}>
        <div class="inline-grid grid-cols-2 gap-4 w-full">
          <div class="h-full">
            <Card data={heroPost} />
          </div>
          <div class="inline-grid grid-cols-2 gap-4 w-full">
            {headerPosts.map(({ node }) => {
              return (
                <div key={`${JSON.stringify(node)}`} class="h-60">
                  <Card data={node} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {morePosts.length > 0 && <MoreNews posts={morePosts} />}
    </div>
  );
};

export default Template;

const MoreNews = ({ posts }) => {
  return (
    <section>
      <h2 className="mt-8 mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        More News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {posts.map(({ node }) => {
          return (
            <div key={`${JSON.stringify(node)}`} class="h-60">
              <Card data={node} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  const image = (
    <Image
      fill
      alt={`Cover Image for ${data?.title}`}
      src={data?.featuredImage?.node.sourceUrl}
      className={cn(
        "absolute shadow-small h-full w-full object-cover rounded-lg",
        {
          "hover:shadow-medium transition-shadow duration-200": data.slug,
        }
      )}
    />
  );
  return (
    <div class="h-full w-full shadow shadow-blue-500/40 rounded-lg relative hover:bg-gray-100">
      <div
        className="sm:mx-0 h-full w-full backdrop-blur-md backdrop-opacity-60"
        style={{
          opacity: 0.8,
        }}
      >
        {data?.slug ? (
          <Link href={`/${data?.slug}`} aria-label={data?.title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: 10000,
          width: "100%",
          bottom: 0,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <div
          class="pb-2 text-3xl font-bold"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#333333",
          }}
        >
          <Link
            href={`/${data?.slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          ></Link>
        </div>
        <p
          class="pb-3 font-normal shadow-blue-500/50"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "50px",
            color: "#333333",
          }}
        >
          {data.slug}
        </p>
      </div>
    </div>
  );
};
