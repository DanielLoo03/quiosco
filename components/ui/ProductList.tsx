"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductList({ products }: { products: any[] }) {
  const [sortedProducts, setSortedProducts] = useState(
    [...products].sort((a, b) => a.name.localeCompare(b.name))
  );

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value;
    let sorted = [...products];

    if (sortOption === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "less30") {
      sorted = sorted.filter((product) => product.price < 30);
    }

    setSortedProducts(sorted);
  };

  return (
    <>
      <div className="mb-6">
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
          Ordenar por:
        </label>
        <select
          id="sort"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={handleSort}
          defaultValue="alphabetical"
        >
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
          <option value="alphabetical">Orden Alfabético</option>
          <option value="less30">Productos Economicos</option>
        </select>
        <div className="mt-4"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
