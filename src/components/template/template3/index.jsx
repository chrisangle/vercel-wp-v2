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
      <section class="mb-32 text-center">
        <div class="grid gap-6 lg:grid-cols-3 xl:gap-12">
          {posts.map(({ node }) => {
            return <Card key={`${JSON.stringify(node)}`} data={node} />;
          })}
        </div>
      </section>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div class="mb-6 lg:mb-0">
      <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex">
          <div
            class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
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
        <div class="p-6">
          <Link href={`/${data?.slug}`}>
            <h5 class="mb-3 text-2xl font-bold text-white">{data?.title}</h5>
          </Link>
          <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            <small>
              Published <u>{data?.date}</u>
            </small>
          </p>

          <Link
            href={`/${data?.slug}`}
            data-te-ripple-init
            data-te-ripple-color="dark"
            class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
