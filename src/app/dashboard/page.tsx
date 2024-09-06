"use client";

import { getCategories } from "@/_data/get-categories";
import { getProducts } from "@/_data/get-products";
import { Category } from "@/_model/category";
import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ProductFormDialog from "./components/product-form-dialog";
import ProductItem from "./components/product-item";
import Search from "./components/search";

const DashboardPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const listProducts = await getProducts(offset);
      const listCategories = await getCategories();

      setProducts(listProducts);
      setCategories(listCategories);
    };

    fetch();
  }, [offset]);

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

      <div className="px-2 my-4">
        <Search offset={offset} setProducts={setProducts} />
      </div>

      <div className="p-1 flex gap-2 flex-col my-2">
        {products.length > 0 ? (
          <>
            {products.slice(0, 5).map((product) => (
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

      <div className="my-5 px-3 flex items-center w-full justify-between sm:justify-around">
        <Button
          variant={"secondary"}
          disabled={offset === 0}
          onClick={() => setOffset((prevOffset) => prevOffset - 5)}
        >
          <ArrowLeftIcon />
          Anterior
        </Button>

        <Button
          variant={"secondary"}
          disabled={products.length < 6}
          onClick={() => setOffset((prevOffset) => prevOffset + 5)}
        >
          Próxima
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
