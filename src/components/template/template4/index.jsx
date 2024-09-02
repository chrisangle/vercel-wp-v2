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
        {posts.map(({ node }) => {
          return <Card key={`${JSON.stringify(node)}`} data={node} />;
        })}
      </section>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div class="mb-12 flex flex-wrap justify-center">
      <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
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

      <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
        <Link href={`/${data?.slug}`}>
          <h5 class="mb-3 text-lg font-bold">{data?.title}</h5>
        </Link>
        <p class="mb-4 text-neutral-500">
          <small>
            Published <u>{data?.date}</u>
          </small>
        </p>
        <Link
          data-te-ripple-init
          data-te-ripple-color="light"
          class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          href={`/${data?.slug}`}
          role="button"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
