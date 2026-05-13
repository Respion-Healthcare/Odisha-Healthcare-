"use client";

export default function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="heading">
        <div className="section-label">
          ✦ Our brand partners
        </div>

        <h2 className="section-title">
          Official <em>Authorised</em>
          <br />
          Distributor
        </h2>

        <p className="section-sub">
          Genuine products with manufacturer warranty
          and certified service support — directly from
          the brands you trust.
        </p>
      </div>

      <div className="brands-grid">
        {/* PHILIPS */}
        <div className="brand-card philips">
          <div className="brand-card-arrow">
            →
          </div>

          <div className="brand-logo-big">
            Philips
          </div>

          <div className="brand-series rose">
            Respironics
          </div>

          <div className="brand-tagline">
            World leader in sleep and respiratory
            care. DreamStation and System One
            CPAP/BiPAP line, oxygen concentrators,
            and a complete accessories ecosystem.
          </div>

          <div className="brand-stats">
            <div>
              <div className="brand-products-count">
                80+
              </div>

              <div className="brand-sub">
                Products
              </div>
            </div>

            <div>
              <div className="brand-products-count">
                3
              </div>

              <div className="brand-sub">
                Product Lines
              </div>
            </div>

            <div>
              <div className="brand-products-count">
                2Y
              </div>

              <div className="brand-sub">
                Warranty
              </div>
            </div>
          </div>
        </div>

        {/* RESMED */}
        <div className="brand-card resmed">
          <div className="brand-card-arrow">
            →
          </div>

          <div className="brand-logo-big">
            ResMed
          </div>

          <div className="brand-series gold">
            AirSense™ Series
          </div>

          <div className="brand-tagline">
            AirSense 10 & 11, AirCurve,
            ClimateLineAir, AirFit masks — the
            gold standard in auto-CPAP technology
            with cloud data management via myAir.
          </div>

          <div className="brand-stats">
            <div>
              <div className="brand-products-count">
                60+
              </div>

              <div className="brand-sub">
                Products
              </div>
            </div>

            <div>
              <div className="brand-products-count">
                5
              </div>

              <div className="brand-sub">
                Product Lines
              </div>
            </div>

            <div>
              <div className="brand-products-count">
                3Y
              </div>

              <div className="brand-sub">
                Warranty
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brands {
          background: var(--bg-mid);
          position: relative;
          overflow: hidden;
        }

        /* SECTION */
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

          max-width: 620px;

          font-weight: 300;
        }

        /* GRID */
        .brands-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 24px;

          margin-top: 60px;
        }

        /* CARD */
        .brand-card {
          border: 1px solid var(--border);

          border-radius: 20px;

          padding: 48px;

          position: relative;
          overflow: hidden;

          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            box-shadow 0.35s,
            border-color 0.35s;

          cursor: pointer;
        }

        /* HOVER GLOW */
        .brand-card::before {
          content: "";

          position: absolute;
          inset: -50%;

          border-radius: 50%;

          opacity: 0;

          transition:
            opacity 0.6s,
            transform 0.6s;

          transform: scale(0.3);
        }

        .brand-card:hover::before {
          opacity: 1;
          transform: scale(1.2);
        }

        .brand-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.35);
        }

        /* PHILIPS */
        .brand-card.philips {
          background: linear-gradient(
            135deg,
            rgba(140,0,30,0.3) 0%,
            rgba(80,0,20,0.08) 100%
          );
        }

        .brand-card.philips::before {
          background: radial-gradient(
            circle,
            rgba(180,0,40,0.15),
            transparent 60%
          );
        }

        .brand-card.philips:hover {
          border-color: var(--maroon-light);
        }

        /* RESMED */
        .brand-card.resmed {
          background: linear-gradient(
            135deg,
            rgba(100,0,30,0.25) 0%,
            rgba(60,0,20,0.06) 100%
          );
        }

        .brand-card.resmed::before {
          background: radial-gradient(
            circle,
            rgba(232,192,106,0.12),
            transparent 60%
          );
        }

        .brand-card.resmed:hover {
          border-color: var(--gold);
        }

        /* LOGO */
        .brand-logo-big {
          font-family: "Playfair Display", serif;

          font-size: 3.5rem;
          font-weight: 900;

          margin-bottom: 16px;

          line-height: 1;

          position: relative;
          z-index: 1;
        }

        .brand-card.philips .brand-logo-big {
          color: var(--rose);
        }

        .brand-card.resmed .brand-logo-big {
          color: var(--gold);
        }

        /* SERIES */
        .brand-series {
          font-family: "Playfair Display", serif;

          font-size: 1rem;

          margin-bottom: 12px;

          position: relative;
          z-index: 1;
        }

        .brand-series.rose {
          color: var(--rose);
        }

        .brand-series.gold {
          color: var(--gold);
        }

        /* TAGLINE */
        .brand-tagline {
          font-size: 0.95rem;

          color: var(--muted);

          line-height: 1.7;

          margin-bottom: 28px;

          font-weight: 300;

          position: relative;
          z-index: 1;
        }

        /* STATS */
        .brand-stats {
          display: flex;
          gap: 48px;

          margin-top: 28px;

          position: relative;
          z-index: 1;
        }

        .brand-products-count {
          font-family: "Space Mono", monospace;

          font-size: 2rem;
          font-weight: 700;

          margin-bottom: 4px;

          position: relative;
          z-index: 1;
        }

        .brand-card.philips .brand-products-count {
          color: var(--rose);
        }

        .brand-card.resmed .brand-products-count {
          color: var(--gold);
        }

        .brand-sub {
          font-size: 0.75rem;

          color: var(--muted);

          text-transform: uppercase;

          letter-spacing: 0.1em;

          position: relative;
          z-index: 1;
        }

        /* ARROW */
        .brand-card-arrow {
          position: absolute;

          top: 40px;
          right: 40px;

          z-index: 2;

          width: 48px;
          height: 48px;

          border-radius: 50%;

          border: 1px solid var(--border);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.2rem;

          color: var(--muted);

          transition: all 0.3s;
        }

        .brand-card:hover .brand-card-arrow {
          background: var(--maroon);

          border-color: var(--maroon);

          color: var(--white);

          transform: rotate(45deg);
        }

        /* TABLET */
        @media (max-width: 1000px) {
          .brands-grid {
            grid-template-columns: 1fr;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .brand-card {
            padding: 32px 28px;
          }

          .brand-logo-big {
            font-size: 2.5rem;
          }

          .brand-stats {
            gap: 24px;
            flex-wrap: wrap;
          }

          .brand-products-count {
            font-size: 1.5rem;
          }

          .brand-card-arrow {
            width: 42px;
            height: 42px;

            top: 24px;
            right: 24px;
          }

          .section-title br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}