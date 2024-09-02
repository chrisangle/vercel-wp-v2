'use client'
import Link from "next/link";
import Container from "../../container";

const Template = ({ edges }) => {
  return (
    <div className="container mx-auto px-5">
      <MoreNews2 posts={edges} />
    </div>
  );
};

export default Template;

const MoreNews2 = ({ posts }) => {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center md:text-left">
        <h2 class="mb-12 text-center text-3xl font-bold">Newest articles</h2>
        {posts.map(({ node }, index) => {
          if (index % 2 === 0) {
            return <CardLeft key={`${JSON.stringify(node)}`} data={node} />;
          }
          return <CardRight key={`${JSON.stringify(node)}`} data={node} />;
        })}
      </section>
    </div>
  );
};

const CardLeft = ({ data }) => {
  return (
    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div class="mb-6 md:mb-0">
        <div
          class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          {data?.slug && (
            <Link
              href={`/${data?.slug}`}
              aria-label={data?.title}
              class="w-full"
              alt={data?.title}
            >
              <img
                alt={`Cover Image for ${data?.title}`}
                src={data?.featuredImage?.node.sourceUrl}
                class="w-full"
              />
            </Link>
          )}
        </div>
      </div>

      <div>
        <Link href={`/${data?.slug}`}>
          <h3 class="mb-3 text-2xl font-bold">{data?.title}</h3>
        </Link>
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>
            Published <u>{data?.date}</u>
          </small>
        </p>
      </div>
    </div>
  );
};

const CardRight = ({ data }) => {
  return (
    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div class="mb-6 md:order-2 md:mb-0">
        <div
          class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          {data?.slug && (
            <Link
              href={`/${data?.slug}`}
              aria-label={data?.title}
              class="w-full"
              alt={data?.title}
            >
              <img
                alt={`Cover Image for ${data?.title}`}
                src={data?.featuredImage?.node.sourceUrl}
                class="w-full"
              />
            </Link>
          )}
        </div>
      </div>

      <div class="md:order-1">
        <Link href={`/${data?.slug}`}>
          <h3 class="mb-3 text-2xl font-bold">{data?.title}</h3>
        </Link>

        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>
            Published <u>{data?.date}</u>
          </small>
        </p>
      </div>
    </div>
  );
};
