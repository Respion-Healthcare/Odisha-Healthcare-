"use client";
export default function CTA() {
  return (
    <section id="contact">
      <div className="wrapper">
        <div>
          <h2 className="section-title">
            Not sure which device is <em> right for you?</em>
          </h2>
        </div>

        <div className="actions">
          <a href="tel:+919876543210" className="btn-primary">
            Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            className="btn-ghost"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}