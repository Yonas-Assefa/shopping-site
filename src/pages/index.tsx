import Head from "next/head";

import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

export function generateStaticParams() {
  return;
}

export async function generateMetadata() {
  return {
    title: "ShaktiTri - Leading three wheeler spare parts saler in India",
    description:
      "ShaktiTri Auto Parts offers top-tier spare parts for all three-wheeler models. Every journey deserves reliability.",
    icons: ["/images/main-logo.webp"],
    openGraph: {
      images: ["/images/main-logo.webp"],
      title: "ShaktiTri - Leading three wheeler spare parts saler in India",
    },
  };
}

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="A short description of your website or page."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/path-to-image.jpg" // Replace with actual image URL
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="A short description of your website or page."
        />
        <meta
          name="twitter:image"
          content="/images/main-logo.webp" // Replace with actual image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Other meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Website Title</title> {/* Static Title */}
      </Head>

      <Layout>
        <PageIntro />

        <section className="featured">
          <div className="container">
            <article
              style={{ backgroundImage: "url(/images/featured-1.webp)" }}
              className="featured-item featured-item-large"
            >
              <div className="featured-item__content">
                <h3>New arrivals are now in!</h3>
              </div>
            </article>

            <article
              style={{ backgroundImage: "url(/images/featured-2.webp)" }}
              className="featured-item featured-item-small-first"
            >
              <div className="featured-item__content">
                <h3>RSI Base Plate ₹125</h3>
              </div>
            </article>

            <article
              style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
              className="featured-item featured-item-small"
            >
              <div className="featured-item__content">
                <h3>
                  Rubber And Steel AD-ASK-007 FL Air Shocks, For Automotive
                </h3>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section__intro">
              <h4>Why should you choose us?</h4>
            </header>

            <ul className="shop-data-items">
              <li>
                <i className="icon-shipping" />
                <div className="data-item__content">
                  <h4>Free Shipping</h4>
                  <p>
                    All purchases over ₹199 are eligible for free shipping via
                    USPS First Class Mail.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-payment" />
                <div className="data-item__content">
                  <h4>Easy Payments</h4>
                  <p>
                    All payments are processed instantly over a secure payment
                    protocol.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-cash" />
                <div className="data-item__content">
                  <h4>Money-Back Guarantee</h4>
                  <p>
                    If an item arrived damaged or you've changed your mind, you
                    can send it back for a full refund.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-materials" />
                <div className="data-item__content">
                  <h4>Finest Quality</h4>
                  <p>
                    Designed to last, each of our products has been crafted with
                    the finest materials.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <ProductsFeatured />
        <Subscribe />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
