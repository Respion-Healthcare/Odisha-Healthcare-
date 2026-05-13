"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    category: "cpap",
    title: "ResMed AirSense 11",
    image: "/images/cpap.jpg",
  },
  {
    category: "bipap",
    title: "DreamStation BiPAP",
    image: "/images/bipap.jpg",
  },
  {
    category: "beds",
    title: "Electric ICU Bed",
    image: "/images/bed.jpg",
  },
  {
    category: "monitors",
    title: "Omron BP Monitor",
    image: "/images/bp.jpg",
  },
];

export default function Products() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="products">
      <div className="section-label">Featured Products</div>

      <h2 className="section-title">
        Top Selling <em>Devices</em>
      </h2>

      <div className="filters">
        {["all", "cpap", "bipap", "beds", "monitors"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((product) => (
          <div className="card" key={product.title}>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
            />

            <h3>{product.title}</h3>
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
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
        }

        img {
          width: 100%;
          height: auto;
        }

        h3 {
          padding: 20px;
        }

        @media(max-width: 900px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media(max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}