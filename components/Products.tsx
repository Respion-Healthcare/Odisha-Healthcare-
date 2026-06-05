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

  const filtered =
    filter === "all"
      ? products.slice(0, 12)
      : products.filter((p) => p.category === filter);

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
        {filtered.map((product) => (
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
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
        }

        .card :global(img) {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        h3 {
          padding: 20px;
          font-size: 1rem;
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