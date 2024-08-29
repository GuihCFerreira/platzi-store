"use client";

import { Category } from "@/_model/category";
import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import DeleteProductDialog from "./delete-product-dialog";
import ProductFormDialog from "./product-form-dialog";

interface ProductItemProps {
  product: Product;
  categories: Category[];
}

const ProductItem = ({ product, categories }: ProductItemProps) => {
  const [isUpdateDialog, setIsUpdateDialog] = useState(false);

  return (
    <>
      <Card className=" rounded-2xl">
        <CardContent className="flex px-2 py-2">
          <Image
            src={product.images[0]}
            width={80}
            height={90}
            alt={product.title}
            className="rounded-sm"
          />
          <div className="ml-3 flex  flex-1 flex-col items-center">
            <p className="truncate text-sm">{product.title + product.id}</p>
            <p className=" text-sm">R$ {product.price.toFixed(2)}</p>

            <div className="flex gap-2 mt-1">
              <Dialog>
                <DialogTrigger asChild className="w-full">
                  <Button
                    variant={"outline"}
                    className="text-xs"
                    onClick={() => setIsUpdateDialog(true)}
                  >
                    Editar
                  </Button>
                </DialogTrigger>

                <DialogTrigger asChild className="w-full">
                  <Button
                    variant={"destructive"}
                    className="text-xs"
                    onClick={() => setIsUpdateDialog(false)}
                  >
                    Excluir
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                  {isUpdateDialog ? (
                    <ProductFormDialog
                      product={product}
                      categories={categories}
                    />
                  ) : (
                    <DeleteProductDialog product={product} />
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItem;
