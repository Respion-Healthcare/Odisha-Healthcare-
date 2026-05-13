"use client";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* BRAND */}
        <div>
          <div className="footer-brand-name">
            Odisha<span>Healthcare</span>
          </div>

          <div className="footer-desc">
            Authorised distributor of Philips,
            ResMed and 10+ leading medical
            equipment brands. Serving patients
            and hospitals across India since
            2009.
          </div>

          <div className="footer-contact">
            <p>
              📍 Plot 42, Sahid Nagar,
              Bhubaneswar — 751007
            </p>

            <p>
              📞{" "}
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </p>

            <p>
              ✉{" "}
              <a href="mailto:info@odishahealthcare.in">
                info@odishahealthcare.in
              </a>
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h5>Products</h5>

          <ul>
            <li>
              <a href="#">
                CPAP Machines
              </a>
            </li>

            <li>
              <a href="#">
                BiPAP Machines
              </a>
            </li>

            <li>
              <a href="#">
                Oxygen Concentrators
              </a>
            </li>

            <li>
              <a href="#">
                Masks & Accessories
              </a>
            </li>

            <li>
              <a href="#">
                Hospital Beds
              </a>
            </li>

            <li>
              <a href="#">
                Suction Machines
              </a>
            </li>
          </ul>
        </div>

        {/* BRANDS */}
        <div className="footer-col">
          <h5>Brands</h5>

          <ul>
            <li>
              <a href="#">
                Philips Respironics
              </a>
            </li>

            <li>
              <a href="#">
                ResMed
              </a>
            </li>

            <li>
              <a href="#">
                Omron
              </a>
            </li>

            <li>
              <a href="#">
                Drive Medical
              </a>
            </li>

            <li>
              <a href="#">
                Nidek
              </a>
            </li>

            <li>
              <a href="#">
                Rossmax
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h5>Company</h5>

          <ul>
            <li>
              <a href="#">
                About Us
              </a>
            </li>

            <li>
              <a href="#">
                Warranty Policy
              </a>
            </li>

            <li>
              <a href="#">
                Returns
              </a>
            </li>

            <li>
              <a href="#">
                Delivery Info
              </a>
            </li>

            <li>
              <a href="#">
                Contact
              </a>
            </li>

            <li>
              <a href="#">
                EMI Options
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Odisha Healthcare.
          All Rights Reserved.
          GST: 21XXXXX1234Z1Z5
        </p>

        <div className="footer-socials">
          <a
            className="social-btn"
            href="#"
          >
            f
          </a>

          <a
            className="social-btn"
            href="#"
          >
            in
          </a>

          <a
            className="social-btn"
            href="#"
          >
            yt
          </a>

          <a
            className="social-btn"
            href="#"
          >
            📱
          </a>
        </div>
      </div>

      <style jsx>{`
        footer {
          background: rgba(0,0,0,0.4);

          border-top: 1px solid var(--border);

          padding: 60px 60px 40px;

          position: relative;
          overflow: hidden;
        }

        /* GRID */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;

          gap: 60px;

          margin-bottom: 48px;
        }

        /* BRAND */
        .footer-brand-name {
          font-family: "Playfair Display", serif;

          font-size: 1.8rem;
          font-weight: 900;

          margin-bottom: 12px;
        }

        .footer-brand-name span {
          color: var(--rose);
        }

        .footer-desc {
          font-size: 0.85rem;

          color: var(--muted);

          line-height: 1.7;

          max-width: 320px;
        }

        /* CONTACT */
        .footer-contact {
          margin-top: 24px;
        }

        .footer-contact p {
          font-size: 0.82rem;

          color: var(--muted);

          margin-bottom: 8px;

          line-height: 1.6;
        }

        .footer-contact a {
          color: var(--rose);

          text-decoration: none;

          transition: opacity 0.3s;
        }

        .footer-contact a:hover {
          opacity: 0.8;
        }

        /* COLUMN */
        .footer-col h5 {
          font-size: 0.75rem;

          letter-spacing: 0.15em;

          text-transform: uppercase;

          color: var(--rose);

          margin-bottom: 20px;

          font-weight: 700;
        }

        .footer-col ul {
          list-style: none;

          display: flex;
          flex-direction: column;

          gap: 12px;
        }

        .footer-col ul li a {
          color: var(--muted);

          text-decoration: none;

          font-size: 0.85rem;

          transition:
            color 0.3s,
            transform 0.3s;

          display: inline-block;
        }

        .footer-col ul li a:hover {
          color: var(--white);

          transform: translateX(4px);
        }

        /* BOTTOM */
        .footer-bottom {
          border-top: 1px solid var(--border);

          padding-top: 28px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;
        }

        .footer-bottom p {
          font-size: 0.78rem;

          color: var(--muted);

          line-height: 1.6;
        }

        /* SOCIALS */
        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 36px;
          height: 36px;

          border-radius: 50%;

          border: 1px solid var(--border);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 0.85rem;

          color: var(--muted);

          cursor: pointer;

          transition: all 0.3s;

          text-decoration: none;
        }

        .social-btn:hover {
          border-color: var(--rose);

          color: var(--rose);

          box-shadow:
            0 0 12px rgba(200,0,50,0.3);

          transform: translateY(-2px);
        }

        /* SCROLL REVEAL */
        .reveal {
          opacity: 0;
          transform: translateY(40px);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* STAGGER */
        .stagger > * {
          opacity: 0;
          transform: translateY(30px);

          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .stagger.visible > *:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0s;
        }

        .stagger.visible > *:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }

        .stagger.visible > *:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .stagger.visible > *:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }

        .stagger.visible > *:nth-child(5) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .stagger.visible > *:nth-child(6) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.5s;
        }

        .stagger.visible > *:nth-child(7) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.6s;
        }

        .stagger.visible > *:nth-child(8) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.7s;
        }

        .stagger.visible > *:nth-child(9) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.8s;
        }

        /* RIPPLE */
        .ripple {
          position: absolute;

          border-radius: 50%;

          background: rgba(255,255,255,0.3);

          transform: scale(0);

          animation: rippleAnim 0.6s linear;

          pointer-events: none;
        }

        @keyframes rippleAnim {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* COUNTER */
        .counting {
          display: inline-block;
        }

        /* PROGRESS BAR */
        #progress-bar {
          position: fixed;

          top: 0;
          left: 0;

          height: 3px;

          z-index: 200;

          background: linear-gradient(
            90deg,
            var(--maroon),
            var(--rose),
            var(--gold)
          );

          width: 0%;

          transition: width 0.1s linear;
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          footer {
            padding: 50px 24px 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-brand-name {
            font-size: 1.6rem;
          }

          .footer-desc {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}  