import { getProducts } from "@/_data/get-products";
import { Button } from "@/components/ui/button";
import ProductItem from "./components/product-item";

const DashboardPage = async () => {
  const products = await getProducts();

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <p className="font-bold uppercase pl-5 mb-3 text-2xl">Produtos</p>
        <Button className="mx-3 my-1">Adicionar</Button>
      </div>
      <div className="p-1 flex gap-2 flex-col">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p>Nenhum produto encontrado...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
