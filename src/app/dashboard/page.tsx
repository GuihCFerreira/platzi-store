import { getCategories } from "@/_data/get-categories";
import { getProducts } from "@/_data/get-products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductFormDialog from "./components/product-form-dialog";
import ProductItem from "./components/product-item";

const DashboardPage = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <p className="font-bold uppercase pl-5 mb-3 text-2xl">Produtos</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-3 my-1">Adicionar</Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <ProductFormDialog product={null} categories={categories} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-1 flex gap-2 flex-col">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                categories={categories}
              />
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
