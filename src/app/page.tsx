import { getProductById } from "@/_data/get-products";
import Header from "@/components/header";

export default async function Home() {
  const products = await getProductById(411);
  console.log(products);

  return (
    <div>
      <Header />
    </div>
  );
}
