import type { GetStaticProps, GetStaticPaths } from "next";
import { useState } from "react";
import Head from "next/head";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Content from "@/components/product-single/content";
import Description from "@/components/product-single/description";
import Gallery from "@/components/product-single/gallery";
import Reviews from "@/components/product-single/reviews";
import ProductsFeatured from "@/components/products-featured";
// types
import type { ProductType } from "@/types";

import Layout from "../../layouts/Main";
import { server } from "../../utils/server";
import useSWR from "swr";
import { ParsedUrlQuery } from "querystring"; // For type definitions

type ProductPageType = {
  productId: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all product IDs to generate static paths for all products
  const res = await fetch(`${server}/api/products`);
  const data = await res.json();

  // Generate paths for each product
  const paths = data.map((product: { id: number }) => ({
    params: { pid: product.id.toString() },
  }));

  return { paths, fallback: "blocking" }; // 'blocking' allows fallback rendering
};

interface Params extends ParsedUrlQuery {
  pid: string; // pid is a string in the URL
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pid } = params as Params; // Type assertion here

  // Return only the product ID for SWR to fetch data client-side
  return { props: { productId: pid } };
};

const Product = ({ productId }: ProductPageType) => {
  // Initialize state hook before useSWR is called
  const [showBlock, setShowBlock] = useState("description");

  // Use SWR to fetch product data
  const { data: product, error } = useSWR<ProductType>(
    `/api/product/${productId}`
  );

  // Handle loading and error states
  if (error) return <div>Failed to load product</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.name} - ShaktiTri Auto Parts</title>
        <meta
          name="description"
          content={`Buy ${product.name} at the best price. Explore more products on our website.`}
        />
        <meta
          name="keywords"
          content={`${product.name}, products, buy online`}
        />
        <meta
          property="og:title"
          content={`${product.name} - ShaktiTri Auto Parts`}
        />
        <meta
          property="og:description"
          content={`Buy ${product.name} at the best price.`}
        />
        <meta property="og:image" content={product.images[0]} />
      </Head>

      <Layout>
        <Breadcrumb />

        <section className="product-single">
          <div className="container">
            <div className="product-single__content">
              <Gallery images={product.images} />
              <Content product={product} />
            </div>

            <div className="product-single__info">
              <div className="product-single__info-btns">
                <button
                  type="button"
                  onClick={() => setShowBlock("description")}
                  className={`btn btn--rounded ${showBlock === "description" ? "btn--active" : ""}`}
                >
                  Description
                </button>
                <button
                  type="button"
                  onClick={() => setShowBlock("reviews")}
                  className={`btn btn--rounded ${showBlock === "reviews" ? "btn--active" : ""}`}
                >
                  Reviews ({product.reviews.length})
                </button>
              </div>

              <Description
                productDesc={product.vehicle_description}
                show={showBlock === "description"}
              />
              <Reviews product={product} show={showBlock === "reviews"} />
            </div>
          </div>
        </section>

        <div className="product-single-page">
          <ProductsFeatured />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Product;
