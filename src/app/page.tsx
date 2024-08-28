import { getProductById } from "@/_data/get-products";
import ProductItem from "@/components/product-item";

export default async function Home() {
  const products = await getProductById(3);

  return (
    <div>
      <ProductItem product={products} />
    </div>
  );
}
