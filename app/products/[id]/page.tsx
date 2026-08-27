import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <Link href="/#products">
          ← Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <div className="product-container">

        {/* Product Image */}
        <div className="product-image">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={700}
            height={600}
            priority
          />
        </div>

        {/* Product Details */}
        <div className="product-details">

          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-actions">
            <button className="enquire-btn">
              Enquire Now
            </button>

            <Link
              href="/#products"
              className="back-products"
            >
              ← Back to Products
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}