import { getProductById } from "@/_data/get-products";
import Header from "@/components/header";
import ProductItem from "@/components/product-item";

export default async function Home() {
  const products = await getProductById(3);

  return (
    <div>
      <Header />
      <ProductItem product={products} />
    </div>
  );
}
