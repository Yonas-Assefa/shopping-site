import { useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProductsContent from "@/components/products-content";
import ProductsFilter from "@/components/products-filter";

import Layout from "../layouts/Main";

// Define the type for the filters
interface Filters {
  productType: string[]; // Array of selected product types
  priceRange: [number, number]; // Price range as a tuple
}

const Products = () => {
  // Explicitly define the state type for filters
  const [filters, setFilters] = useState<Filters>({
    productType: [],
    priceRange: [20, 150],
  });

  // Function to handle the application of filters
  const handleFiltersApply = (
    selectedFilters: Record<string, string[]>,
    priceRange: [number, number],
  ) => {
    setFilters({
      productType: selectedFilters["product-type"] || [],
      priceRange,
    });
  };
  console.log("products.tsx", filters);
  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter onApplyFilters={handleFiltersApply} />
          <ProductsContent filters={filters} />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Products;
