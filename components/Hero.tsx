"use client";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background FX */}
      <div className="hero-bg" />
      <div className="hero-grid-lines" />

      {/* Floating Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />

      {/* Floating Medical Crosses */}
      <div className="deco-cross dc1">✚</div>
      <div className="deco-cross dc2">+</div>

      <div className="content">
        <div className="badge">✦ Authorised Distributor</div>

        <h1>
          Premium Medical <em>Equipment</em> Delivered
        </h1>

        <p>
          Your trusted source for Philips & ResMed CPAP/BiPAP
          machines, hospital beds, oxygen concentrators and more.
        </p>

        <div className="actions">
          <a href="#products" className="btn-primary">
            Shop Products
          </a>

          <a href="#contact" className="btn-ghost">
            Get Expert Help
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 60px 80px;
          position: relative;
          overflow: hidden;
          background: var(--bg-dark);
        }

        /* BACKGROUND */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse 80% 70% at 70% 50%,
              rgba(180, 0, 40, 0.18) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 50% 50% at 20% 80%,
              rgba(232, 192, 106, 0.07) 0%,
              transparent 50%
            );
        }

        /* GRID */
        .hero-grid-lines {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(200, 50, 70, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(200, 50, 70, 0.07) 1px,
              transparent 1px
            );

          background-size: 60px 60px;

          mask-image: radial-gradient(
            ellipse 70% 70% at 60% 50%,
            black 0%,
            transparent 80%
          );

          animation: gridPan 20s linear infinite;
        }

        @keyframes gridPan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        /* ORBS */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
          animation: drift 9s ease-in-out infinite;
        }

        .orb-1 {
          width: 520px;
          height: 520px;
          background: var(--maroon);
          top: -120px;
          right: 80px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 320px;
          height: 320px;
          background: var(--rose);
          bottom: 40px;
          right: 280px;
          animation-delay: 3s;
        }

        .orb-3 {
          width: 220px;
          height: 220px;
          background: var(--gold);
          top: 180px;
          left: 160px;
          animation-delay: 6s;
        }

        .orb-4 {
          width: 180px;
          height: 180px;
          background: var(--maroon-light);
          top: 60%;
          right: 10%;
          animation-delay: 1.5s;
        }

        @keyframes drift {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-32px) scale(1.06);
          }
        }

        /* CONTENT */
        .content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 18px;
          border-radius: 50px;

          background: rgba(180, 0, 40, 0.14);
          border: 1px solid rgba(220, 50, 80, 0.3);

          color: var(--rose);

          margin-bottom: 30px;

          animation: fadeUp 0.8s ease both;
        }

        h1 {
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1;
          font-family: "Playfair Display", serif;
          margin-bottom: 24px;

          background: linear-gradient(
            90deg,
            var(--white) 60%,
            var(--rose) 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: fadeUp 0.8s 0.1s ease both;
        }

        h1 em {
          color: var(--rose);
          font-style: normal;
        }

        p {
          color: var(--muted);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 40px;

          animation: fadeUp 0.8s 0.2s ease both;
        }

        /* ACTIONS */
        .actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;

          animation: fadeUp 0.8s 0.3s ease both;
        }

        .btn-primary {
          background: linear-gradient(
            135deg,
            var(--maroon),
            var(--rose)
          );

          color: white;
          border: none;

          padding: 16px 36px;
          border-radius: 50px;

          font-weight: 700;
          text-decoration: none;

          position: relative;
          overflow: hidden;

          transition:
            transform 0.25s,
            box-shadow 0.25s;

          box-shadow: 0 6px 24px rgba(200, 0, 50, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);

          box-shadow: 0 16px 44px rgba(200, 0, 50, 0.55);
        }

        .btn-ghost {
          border: 1px solid var(--border);
          color: var(--cream);

          padding: 15px 36px;
          border-radius: 50px;

          text-decoration: none;

          transition:
            border-color 0.3s,
            background 0.3s;
        }

        .btn-ghost:hover {
          border-color: var(--rose);
          background: rgba(180, 0, 40, 0.1);
        }

        /* FLOATING CROSSES */
        .deco-cross {
          position: absolute;
          z-index: 1;

          opacity: 0.06;

          font-size: 10rem;
          color: var(--rose);

          animation:
            spin 24s linear infinite,
            floatCross 8s ease-in-out infinite;

          user-select: none;
          pointer-events: none;

          text-shadow:
            0 0 20px rgba(255, 0, 80, 0.25),
            0 0 60px rgba(255, 0, 80, 0.12);
        }

        .dc1 {
          top: 10%;
          right: 15%;
        }

        .dc2 {
          bottom: 15%;
          left: 5%;
          font-size: 6rem;
          animation-direction: reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes floatCross {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 24px 80px;
          }

          .deco-cross {
            font-size: 5rem;
          }

          .orb-1 {
            width: 300px;
            height: 300px;
          }

          .orb-2 {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}