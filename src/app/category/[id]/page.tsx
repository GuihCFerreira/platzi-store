"use client";

import { CATEGORY_ICON } from "@/_constants/category-icon";
import { getCategoryById } from "@/_data/get-categories";
import { getProductsByCategory } from "@/_data/get-products";
import { Category } from "@/_model/category";
import { Product } from "@/_model/product";
import ProductItem from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface CategoryProductsProps {
  params: {
    id: number;
  };
}

const CategoryPage = ({ params }: CategoryProductsProps) => {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>();
  //const products = await getProductsByCategory(params.id);
  //const category = await getCategoryById(params.id);

  useEffect(() => {
    const fetch = async () => {
      const product = await getProductsByCategory(params.id, offset);
      setProducts(product);

      const categoryUrl = await getCategoryById(params.id);
      setCategory(categoryUrl);
    };

    fetch();
    console.log(products.length);

    console.log(process.env.BASE_URL);

    console.log("Mudou offset" + offset);
  }, [offset]);

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2 w-fit"
        variant={"outline"}
      >
        {CATEGORY_ICON[category?.name as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>

      {/* <ProductList offset={0} title={null} categoryId={params.id} /> */}
      <div className="grid grid-cols-2 gap-8">
        {products?.length > 0 ? (
          <>
            {products.slice(0, 5).map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p className="items-center">
            Nenhum produto encontrado para essa categoria ...
          </p>
        )}
      </div>

      <div className="flex items-center w-full justify-between sm:justify-around">
        <div>
          <Button
            variant={"secondary"}
            disabled={offset === 0}
            className={offset === 0 ? "hidden" : ""}
            onClick={() => setOffset((prevOffset) => prevOffset - 5)}
          >
            <ArrowLeftIcon />
            Anterior
          </Button>
        </div>

        <div>
          <Button
            variant={"secondary"}
            disabled={products.length < 6}
            className={products.length < 6 ? "hidden" : ""}
            onClick={() => setOffset((prevOffset) => prevOffset + 5)}
          >
            Próxima
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
