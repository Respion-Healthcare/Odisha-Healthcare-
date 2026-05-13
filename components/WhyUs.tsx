"use client";

const features = [
  {
    icon: "✓",
    title: "100% Genuine Products",
    desc:
      "Every device is sourced directly from manufacturers with valid invoices, warranty cards and hologram seals.",
  },

  {
    icon: "🚚",
    title: "Pan-India Delivery",
    desc:
      "Same-day dispatch in Bhubaneswar. 2–5 day delivery across India with real-time tracking.",
  },

  {
    icon: "🎓",
    title: "Expert Clinical Guidance",
    desc:
      "Our team includes certified respiratory therapists who help you choose the right device and settings.",
  },

  {
    icon: "🔧",
    title: "After-Sale Service",
    desc:
      "Free set-up assistance, mask fitting support and prompt repair service under warranty.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-grid">
        {/* LEFT */}
        <div>
          <div className="section-label">
            ✦ Why choose us
          </div>

          <h2 className="section-title">
            Healthcare You Can
            <br />
            <em>Actually Trust</em>
          </h2>

          <p className="section-sub">
            We combine authorised products, expert
            guidance, and doorstep delivery to make
            home healthcare simple and reliable.
          </p>

          <div className="why-features">
            {features.map((item) => (
              <div
                key={item.title}
                className="why-feature"
              >
                <div className="why-feature-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="why-visual">
          {/* TOP FLOAT */}
          <div className="why-card-float wc1">
            <div className="wc-mini-grid">
              <div className="wc-mini">
                <div className="wc-mini-num">
                  10K+
                </div>

                <div className="wc-mini-lbl">
                  Happy Patients
                </div>
              </div>

              <div className="wc-mini">
                <div className="wc-mini-num">
                  98%
                </div>

                <div className="wc-mini-lbl">
                  Satisfaction
                </div>
              </div>

              <div className="wc-mini">
                <div className="wc-mini-num">
                  500+
                </div>

                <div className="wc-mini-lbl">
                  SKUs
                </div>
              </div>

              <div className="wc-mini">
                <div className="wc-mini-num">
                  15Y
                </div>

                <div className="wc-mini-lbl">
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* CENTER FLOAT */}
          <div className="why-card-float wc3">
            <div className="wc-num">24/7</div>

            <div className="wc-label">
              Support Line
            </div>
          </div>

          {/* BOTTOM FLOAT */}
          <div className="why-card-float wc2">
            <div className="wc-top-label">
              Average delivery
            </div>

            <div className="wc-delivery">
              2.4 Days
            </div>

            <div className="wc-bottom-label">
              across all of India
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-us {
          background: var(--bg-dark);
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

          margin-bottom: 18px;
        }

        .section-title em {
          font-style: normal;
          color: var(--rose);
        }

        .section-sub {
          color: var(--muted);

          font-size: 1rem;
          line-height: 1.7;

          max-width: 580px;

          font-weight: 300;

          margin-bottom: 40px;
        }

        /* GRID */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 80px;
          align-items: center;

          margin-top: 60px;
        }

        /* FEATURES */
        .why-features {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .why-feature {
          display: flex;
          gap: 20px;
          align-items: flex-start;

          padding: 24px;

          border-radius: 16px;

          border: 1px solid transparent;

          transition:
            border-color 0.3s,
            background 0.3s,
            transform 0.3s;

          cursor: pointer;
        }

        .why-feature:hover {
          border-color: var(--border);

          background: var(--card-bg);

          transform: translateX(8px);
        }

        .why-feature-icon {
          width: 48px;
          height: 48px;

          border-radius: 12px;

          flex-shrink: 0;

          background: rgba(180,0,40,0.15);

          color: var(--rose);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.3rem;

          transition:
            background 0.3s,
            transform 0.3s;
        }

        .why-feature:hover .why-feature-icon {
          background: var(--maroon);

          transform: rotate(-8deg) scale(1.1);
        }

        .why-feature h4 {
          font-family: "Playfair Display", serif;

          font-size: 1.05rem;
          font-weight: 700;

          margin-bottom: 6px;
        }

        .why-feature p {
          font-size: 0.85rem;

          color: var(--muted);

          line-height: 1.6;
        }

        /* VISUAL */
        .why-visual {
          position: relative;
          height: 500px;
        }

        .why-card-float {
          position: absolute;

          background: rgba(26,4,8,0.7);

          border: 1px solid var(--border);

          border-radius: 20px;

          padding: 24px;

          backdrop-filter: blur(12px);

          animation: floatCard 6s ease-in-out infinite;
        }

        .wc1 {
          top: 0;
          left: 0;
          right: 60px;

          animation-delay: 0s;
        }

        .wc2 {
          bottom: 0;
          right: 0;
          left: 80px;

          animation-delay: 2s;
        }

        .wc3 {
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);

          width: 180px;

          text-align: center;

          animation: floatCard3 6s ease-in-out infinite;

          animation-delay: 1s;
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatCard3 {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateY(0);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateY(-10px);
          }
        }

        /* CENTER */
        .wc-num {
          font-family: "Space Mono", monospace;

          font-size: 2.5rem;
          font-weight: 700;

          color: var(--rose);

          line-height: 1;
        }

        .wc-label {
          font-size: 0.75rem;

          color: var(--muted);

          margin-top: 4px;

          letter-spacing: 0.06em;
        }

        /* MINI GRID */
        .wc-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 16px;
        }

        .wc-mini {
          text-align: center;
        }

        .wc-mini-num {
          font-family: "Space Mono", monospace;

          font-size: 1.5rem;
          font-weight: 700;

          color: var(--white);
        }

        .wc-mini-lbl {
          font-size: 0.7rem;

          color: var(--muted);
        }

        /* DELIVERY */
        .wc-top-label {
          font-size: 0.75rem;

          color: var(--muted);

          letter-spacing: 0.1em;

          text-transform: uppercase;

          margin-bottom: 10px;
        }

        .wc-delivery {
          font-family: "Space Mono", monospace;

          font-size: 1.8rem;
          font-weight: 700;

          color: var(--rose);
        }

        .wc-bottom-label {
          font-size: 0.78rem;

          color: var(--muted);

          margin-top: 6px;
        }

        /* TABLET */
        @media (max-width: 1000px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .why-visual {
            height: 420px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .why-grid {
            gap: 40px;
          }

          .why-feature {
            padding: 20px;
          }

          .why-visual {
            height: 360px;
          }

          .wc1 {
            right: 20px;
          }

          .wc2 {
            left: 20px;
          }

          .wc3 {
            width: 140px;
            padding: 18px;
          }

          .wc-num {
            font-size: 2rem;
          }

          .wc-mini-num {
            font-size: 1.2rem;
          }

          .section-title br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}