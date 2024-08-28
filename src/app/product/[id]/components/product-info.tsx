"use client";

import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const addProductToCartClick = () => {
    //addProductToCart({...product, quantity})
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.title}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R${product.price.toFixed(2)}</h1>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="opacity-60 text-justify text-sm">{product.description}</p>
      </div>

      <Button
        className="mt-8 uppercase font-bold"
        onClick={addProductToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="flex bg-accent items-center px-5 py-2 justify-between mt-5 rounded-lg">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#02ea8b]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
