"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";

const filters = [
  { label: "All", value: "all" },
  { label: "CPAP", value: "cpap-machine" },
  { label: "BiPAP", value: "bipap-machine" },
  { label: "Oxygen", value: "oxygen-concentrator" },
   { label: "Hospital Beds", value: "hospital-bed" },
  { label: "Suction Machine", value: "suction-machine" },
  { label: "Nebulizer", value: "nebulizer" },
  { label: "BP Monitor", value: "bp-monitor" },
  { label: "Masks", value: "nasal-mask" },
];

export default function Products() {
 const [filter, setFilter] = useState("all");
const [showAll, setShowAll] = useState(false);

const allProducts = [
  ...products.filter((p) => p.category === "cpap-machine").slice(0, 2),
  ...products.filter((p) => p.category === "bipap-machine").slice(0, 2),
  ...products.filter((p) => p.category === "oxygen-concentrator").slice(0, 2),
  ...products.filter((p) => p.category === "nasal-mask").slice(0, 2),
  ...products.filter((p) => p.category === "full-face-mask").slice(0, 2),
];

const filtered =
  filter === "all"
    ? allProducts
    : products.filter((p) => p.category === filter);

const displayedProducts =
  filter === "all" && !showAll
    ? filtered.slice(0, 10)
    : filtered;

  return (
    <section id="products">
      <div className="section-label">Featured Products</div>

      <h2 className="section-title">
        Top Selling <em>Devices</em>
      </h2>

      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={filter === f.value ? "active" : ""}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {displayedProducts.map((product) => (
          <div className="card" key={product.id}>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={300}
            />

            <h3>{product.name}</h3>
          </div>
        ))}
      </div>

{filter === "all" && !showAll && (
  <div className="view-more-wrap">
    <button
      className="view-more-btn"
      onClick={() => setShowAll(true)}
    >
      View More Products
    </button>
  </div>
)}

      <style jsx>{`
        .filters {
          margin: 30px 0;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        button {
          background: transparent;
          border: 1px solid var(--border);
          padding: 10px 20px;
          border-radius: 50px;
          color: white;
          cursor: pointer;
        }

        .active {
          background: var(--maroon);
        }

        .grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
        }

        .card :global(img) {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
       h3 {
  padding: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
}

.view-more-wrap {
  text-align: center;
  margin-top: 30px;
}

.view-more-btn {
  background: var(--maroon);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
}
  
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}