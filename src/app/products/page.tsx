"use client";

import { getProductByTitle } from "@/_data/get-products";
import { Product } from "@/_model/product";
import ProductItem from "@/components/product-item";
import Search from "@/components/search";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductsPageProps {
  searchParams: {
    title: string;
  };
}

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  //const products = await getProductByTitle(searchParams.title);

  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const product = await getProductByTitle(searchParams.title, offset);
      setProducts(product);
    };

    fetch();
  }, [offset]);

  return (
    <div className="flex flex-col gap-8 p-5">
      <Search />

      <SectionTitle>Resultados para {searchParams.title}</SectionTitle>

      <div className="grid grid-cols-2 gap-8 px-5">
        {products.length > 0 ? (
          <>
            {products.slice(0, 5).map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p className="items-center">
            Nenhum produto encontrado para essa busca...
          </p>
        )}
      </div>

      <div className="flex items-center w-full justify-between sm:justify-around">
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

export default ProductsPage;
