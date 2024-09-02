import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Template0 from "@/components/template/template0";
import Template1 from "@/components/template/template1";
import Template2 from "@/components/template/template2";
import Template3 from "@/components/template/template3";
import Template4 from "@/components/template/template4";
import Template5 from "@/components/template/template5";

export const revalidate = 10;

export default async function Home() {
  const allPosts = await getAllPostsForHome(false);
  const { edges } = allPosts || {};
  const listTemplate = [Template0, Template1, Template2, Template3, Template4, Template5];
  const Template = listTemplate[process?.env?.TEMPLATE || 0];

  const mgidSiteId = process?.env?.MGID_SITE_ID;
  const adskeeperSiteId = process?.env?.ADSKEEPER_SITE_ID;
  return (
    <Layout>
      <Head>
        <title>{process?.env?.CMS_NAME}</title>
        {mgidSiteId && (
          <script src={`https://jsc.mgid.com/site/${mgidSiteId}.js`} async />
        )}
        {adskeeperSiteId && (
          <script src={`https://jsc.adskeeper.com/site/${adskeeperSiteId}.js`} async />
        )}
      </Head>
      {mgidSiteId && (
        <Script
          src={`https://jsc.mgid.com/site/${mgidSiteId}.js`}
          strategy="lazyOnload"
        />
      )}
      {adskeeperSiteId && (
        <Script
          src={`https://jsc.adskeeper.com/site/${adskeeperSiteId}.js`}
          strategy="lazyOnload"
        />
      )}
      <Template edges={edges} />
    </Layout>
  );
}

export async function getData() {
  const allPosts = await getAllPostsForHome(false); // Adjust preview flag if needed
  return { allPosts };
}