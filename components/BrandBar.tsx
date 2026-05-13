"use client";

export default function BrandBar() {
  const brands = [
    "PHILIPS RESPIRONICS",
    "RESMED",
    "OMRON",
    "YUWELL",
    "DRIVE MEDICAL",
    "NIDEK",
    "BMC",
    "FISHER & PAYKEL",
  ];

  return (
    <section className="brand-bar">
      <div className="brand-label">
        Trusted Global Brands
      </div>

      {/* Double marquee for seamless loop */}
      <div className="marquee-wrap">
        <div className="brand-marquee">
          {brands.map((brand, i) => (
            <span key={i} className="brand-item">
              {brand}
            </span>
          ))}

          {brands.map((brand, i) => (
            <span key={`duplicate-${i}`} className="brand-item">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brand-bar {
          position: relative;

          padding: 22px 60px;

          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);

          background: rgba(255, 255, 255, 0.015);

          display: flex;
          align-items: center;
          gap: 60px;

          overflow: hidden;
        }

        .brand-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;

          color: var(--muted);

          white-space: nowrap;
          flex-shrink: 0;

          font-weight: 700;
        }

        .marquee-wrap {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .brand-marquee {
          display: flex;
          align-items: center;
          gap: 60px;

          width: max-content;

          animation: marquee 22s linear infinite;
        }

        .brand-item {
          font-family: "Space Mono", monospace;

          font-size: 0.95rem;
          font-weight: 700;

          letter-spacing: 0.08em;

          color: rgba(255, 255, 255, 0.25);

          transition:
            color 0.3s ease,
            transform 0.3s ease;

          cursor: pointer;

          white-space: nowrap;
        }

        .brand-item:hover {
          color: var(--rose);
          transform: translateY(-2px);
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* Edge Fade */
        .marquee-wrap::before,
        .marquee-wrap::after {
          content: "";

          position: absolute;
          top: 0;

          width: 100px;
          height: 100%;

          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrap::before {
          left: 0;

          background: linear-gradient(
            to right,
            var(--bg-dark),
            transparent
          );
        }

        .marquee-wrap::after {
          right: 0;

          background: linear-gradient(
            to left,
            var(--bg-dark),
            transparent
          );
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .brand-bar {
            padding: 18px 24px;
            gap: 24px;
          }

          .brand-label {
            display: none;
          }

          .brand-marquee {
            gap: 40px;
            animation-duration: 16s;
          }

          .brand-item {
            font-size: 0.8rem;
          }

          .marquee-wrap::before,
          .marquee-wrap::after {
            width: 40px;
          }
        }
      `}</style>
    </section>
  );
}