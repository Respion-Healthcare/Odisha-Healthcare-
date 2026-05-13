"use client";

const testimonials = [
  {
    stars: "★★★★★",
    text:
      "Ordered a ResMed AirSense 11 for my father. Delivered in 2 days with full setup guidance. The team helped us get the right mask fit. Highly recommended!",
    name: "Ranjit Kumar",
    role: "Bhubaneswar · CPAP User",
    avatar: "RK",
  },

  {
    stars: "★★★★★",
    text:
      "Got a Philips EverFlo oxygen concentrator after my mother's surgery. The price was the best we found and delivery was same day. Excellent service!",
    name: "Sunita Patel",
    role: "Cuttack · OC Buyer",
    avatar: "SP",
  },

  {
    stars: "★★★★★",
    text:
      "Bought a hospital bed and wheelchair together. Assembly was done at home by their team. Very professional and the products are genuinely top quality.",
    name: "Arjun Mishra",
    role: "Puri · Hospital Equipment",
    avatar: "AM",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="heading">
        <div className="section-label">
          ✦ Customer stories
        </div>

        <h2 className="section-title">
          Trusted by <em>Thousands</em>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="testi-card"
          >
            <div className="testi-stars">
              {item.stars}
            </div>

            <div className="testi-text">
              "{item.text}"
            </div>

            <div className="testi-author">
              <div className="testi-avatar">
                {item.avatar}
              </div>

              <div>
                <div className="testi-name">
                  {item.name}
                </div>

                <div className="testi-role">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonials {
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
        }

        .section-title em {
          font-style: normal;
          color: var(--rose);
        }

        /* GRID */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 24px;

          margin-top: 60px;
        }

        /* CARD */
        .testi-card {
          background: var(--card-bg);

          border: 1px solid var(--border);

          border-radius: 20px;

          padding: 32px;

          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            border-color 0.3s,
            box-shadow 0.35s;

          position: relative;
          overflow: hidden;
        }

        .testi-card::before {
          content: '"';

          position: absolute;

          top: -10px;
          right: 20px;

          font-family: "Playfair Display", serif;

          font-size: 7rem;
          font-weight: 900;

          color: var(--maroon);

          opacity: 0.15;

          line-height: 1;

          pointer-events: none;
        }

        .testi-card:hover {
          transform: translateY(-6px);

          border-color: rgba(220,50,70,0.4);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.25);
        }

        /* STARS */
        .testi-stars {
          color: var(--gold);

          font-size: 0.9rem;

          margin-bottom: 16px;

          letter-spacing: 3px;

          position: relative;
          z-index: 2;
        }

        /* TEXT */
        .testi-text {
          font-size: 0.9rem;

          color: var(--cream);

          line-height: 1.7;

          margin-bottom: 24px;

          font-style: italic;

          position: relative;
          z-index: 2;
        }

        /* AUTHOR */
        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;

          position: relative;
          z-index: 2;
        }

        .testi-avatar {
          width: 44px;
          height: 44px;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            var(--maroon),
            var(--rose)
          );

          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 700;
          font-size: 1rem;

          color: var(--white);

          flex-shrink: 0;
        }

        .testi-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .testi-role {
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* TABLET */
        @media (max-width: 1000px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .testi-card {
            padding: 28px 24px;
          }

          .testi-card::before {
            font-size: 5rem;
          }

          .testi-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}