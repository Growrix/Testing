"use client";

import { useMemo, useState } from "react";
import { Hero } from "@/components/site/hero";
import { products, categoryLabels, type ProductCategory } from "@/data/site";
import { ProductCards } from "@/components/site/product-cards";

const allCategories = Object.keys(categoryLabels) as ProductCategory[];

export default function ShopPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">("all");

  const slugs = useMemo(() => {
    return products
      .filter((product) => {
        const nameMatch =
          query.trim().length === 0 ||
          product.name.toLowerCase().includes(query.trim().toLowerCase());
        const categoryMatch = category === "all" || product.category === category;
        return nameMatch && categoryMatch;
      })
      .map((product) => product.slug);
  }, [category, query]);

  return (
    <>
      <Hero
        title="Detailing Product Catalog"
        subtitle="Commerce Module"
        description="Search, filter, wishlist, cart, and checkout entry are now owned by native React state in the App Router."
        image="/images/background/6.webp"
      />

      <section>
        <div className="container">
          <div className="row g-3 mb-4">
            <div className="col-lg-6">
              <input
                className="form-control"
                type="search"
                placeholder="Search products"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <select
                className="form-control"
                value={category}
                onChange={(event) => setCategory(event.target.value as ProductCategory | "all")}
              >
                <option value="all">All Categories</option>
                {allCategories.map((entry) => (
                  <option key={entry} value={entry}>
                    {categoryLabels[entry]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {slugs.length > 0 ? (
            <ProductCards slugs={slugs} />
          ) : (
            <div className="p-4 rounded-1 bg-dark-2 text-center">
              No products matched your filters. Reset search or pick another category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
