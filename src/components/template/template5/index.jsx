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
        {posts.map(({ node }) => {
          return <Card key={`${JSON.stringify(node)}`} data={node} />;
        })}
      </section>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div class="mb-6 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
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

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <Link href={`/${data?.slug}`}>
          <h5 class="mb-3 text-lg font-bold">{data?.title}</h5>
        </Link>

        <p class="mb-6 text-neutral-500 dark:text-neutral-500">
          <small>
            Published <u>{data?.date}</u>
          </small>
        </p>
      </div>
    </div>
  );
};
