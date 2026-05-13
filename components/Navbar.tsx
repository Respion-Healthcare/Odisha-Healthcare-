"use client";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Odisha<span>Healthcare</span>
      </div>

      <ul>
        <li><a href="#products">Products</a></li>
        <li><a href="#brands">Brands</a></li>
        <li><a href="#why-us">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button>Request Quote</button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(20px);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 900;
          font-family: 'Playfair Display', serif;
        }

        .logo span {
          color: var(--rose);
        }

        ul {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        a {
          color: var(--muted);
          text-decoration: none;
        }

        button {
          background: linear-gradient(135deg, var(--maroon), var(--rose));
          border: none;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          cursor: pointer;
        }

        @media(max-width: 900px) {
          ul {
            display: none;
          }

          .navbar {
            padding: 20px;
          }
        }
      `}</style>
    </nav>
  );
}