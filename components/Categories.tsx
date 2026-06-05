"use client";

const categories = [
  {
    image: "/images/Category/bipap cpap.jpg",
    title: "CPAP & BiPAP Therapy",
    desc:
      "Philips DreamStation, ResMed AirSense, BiPAP Auto — sleep therapy machines with masks and accessories.",
    count: "120+ Products",
    featured: true,
  },

  {
    image: "/images/Category/hospital bed.jpg",
    title: "Hospital Beds",
    desc:
      "Electric & manual ICU, semi-fowler and Fowler beds for home & clinical use.",
    count: "40+ Products",
  },

  {
    image: "/images/Category/suction machiene.jpg",
    title: "Suction Machines",
    desc:
      "Portable & bedside suction units, catheters and accessories.",
    count: "25+ Products",
  },

  {
    image: "/images/Category/wheel chairs.jpg",
    title: "Wheelchairs",
    desc:
      "Standard, motorized, recliner and pediatric wheelchairs.",
    count: "35+ Products",
  },

  {
   image: "/images/Category/pulse.jpg",
    title: "Pulse Oximeters",
    desc:
      "Fingertip, tabletop and handheld SpO₂ monitors with accurate readings.",
    count: "30+ Products",
  },

  {
    image: "/images/Category/nebulizer.jpg",
    title: "Nebulisers",
    desc:
      "Compressor and mesh nebulisers for asthma and respiratory therapy.",
    count: "20+ Products",
  },

  {
    image: "/images/Category/bp monitor.jpg",
    title: "BP Monitors",
    desc:
      "Upper arm and wrist digital BP machines with clinical-grade accuracy.",
    count: "28+ Products",
  },

  {
    image: "/images/Category/mask and accesories.jpg",
    title: "Masks & Accessories",
    desc:
      "Full-face, nasal pillow, humidifiers, tubing and CPAP accessories.",
    count: "200+ Products",
  },
  {
  image: "/images/Category/oc.jpg",
  title: "Oxygen Concentrators",
  desc:
    "Portable and stationary oxygen concentrators for homecare, hospitals and respiratory support.",
  count: "50+ Products",
},
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="heading">
        <div className="section-label">
          ✦ Browse by category
        </div>

        <h2 className="section-title">
          Everything You Need,
          <br />
          <em>All in One Place</em>
        </h2>

        <p className="section-sub">
          Explore premium healthcare and respiratory equipment
          trusted by hospitals, clinics and homecare patients.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((item) => (
          <div
            key={item.title}
            className={`cat-card ${
              item.featured ? "featured" : ""
            }`}
          >
           <img
  src={item.image}
  alt={item.title}
  className="cat-bg"
/>

{item.featured && (
  <span className="cat-badge">
    ★ Best Sellers
  </span>
)}

<div className="cat-name">
  {item.title}
</div>
            <div className="cat-desc">
              {item.desc}
            </div>

            <div className="cat-count">
              → {item.count}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .categories {
          background: var(--bg-mid);
          position: relative;
          overflow: hidden;
        }

        .heading {
          margin-bottom: 20px;
        }

        /* SECTION COMMON */
        .section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 16px;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .section-title em {
          font-style: normal;
          color: var(--rose);
        }

        .section-sub {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
          max-width: 560px;
          font-weight: 300;
        }

        /* GRID */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }

        /* CARD */
        .cat-card {
          background: var(--card-bg);
          border: 1px solid var(--border);

          border-radius: 20px;
          padding: 36px 28px;

          cursor: pointer;
          position: relative;
          overflow: hidden;

          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            border-color 0.3s,
            box-shadow 0.3s;
        }
.cat-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
        .cat-card::before {
          content: "";
          position: absolute;
          inset: 0;

         background: linear-gradient(
  to top,
  rgba(0,0,0,0.85),
  rgba(0,0,0,0.25)
);

opacity: 1;
          transition: opacity 0.3s;
        }

        /* SHIMMER */
        .cat-card::after {
          content: "";
          position: absolute;

          top: -60%;
          left: -60%;

          width: 60%;
          height: 200%;

          background: rgba(255,255,255,0.04);

          transform: skewX(-20deg);

          transition: left 0.5s;
        }

        .cat-card:hover::after {
          left: 130%;
        }

        .cat-card:hover {
          transform: translateY(-10px);

          border-color: var(--rose);

          box-shadow:
            0 20px 50px rgba(180,0,40,0.28);
        }

        .cat-card:hover::before {
          opacity: 1;
        }

        .cat-card:hover .cat-icon {
          background: var(--maroon);
          transform: scale(1.12) rotate(-5deg);
        }

        /* ICON */
        .cat-icon {
          width: 56px;
          height: 56px;

          border-radius: 14px;

          background: rgba(180,0,40,0.15);
          color: var(--rose);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.5rem;

          margin-bottom: 20px;

          transition:
            background 0.3s,
            transform 0.35s;

          position: relative;
          z-index: 2;
        }

        /* TEXT */
        .cat-name {
          font-family: "Playfair Display", serif;
          font-size: 1.2rem;
          font-weight: 700;
color: white;
          margin-bottom: 10px;

          position: relative;
          z-index: 2;
        }

        .cat-desc {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
color: rgba(255,255,255,0.85);
          position: relative;
          z-index: 2;
        }

        .cat-count {
          margin-top: 20px;

          font-family: "Space Mono", monospace;
          font-size: 0.75rem;

          color: white;

          letter-spacing: 0.05em;

          position: relative;
          z-index: 2;
        }

        /* FEATURED CARD */
        .cat-card.featured {
          grid-column: span 2;
          grid-row: span 2;

          background: linear-gradient(
            135deg,
            rgba(180,0,40,0.2) 0%,
            rgba(92,0,22,0.08) 100%
          );

          border-color: rgba(220,50,70,0.4);

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          padding: 48px;

          min-height: 340px;
        }

        .cat-card.featured .cat-name {
          font-size: 2rem;
          line-height: 1.1;
        }

        .cat-card.featured .cat-icon {
          width: 72px;
          height: 72px;
          font-size: 2rem;
        }

        .cat-badge {
          position: absolute;

          top: 28px;
          right: 28px;

          background: var(--gold);
          color: var(--bg-dark);

          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;

          padding: 5px 14px;

          border-radius: 50px;

          text-transform: uppercase;
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cat-card.featured {
            grid-column: span 2;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }

          .cat-card.featured {
            grid-column: span 1;
            grid-row: span 1;

            min-height: auto;
            padding: 36px 28px;
          }

          .cat-card.featured .cat-name {
            font-size: 1.6rem;
          }

          .section-title br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}