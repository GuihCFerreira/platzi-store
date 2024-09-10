"use client";

import { CartContext, CartProduct } from "@/_providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  //const {decreaseProductQuantity, increaseProductQuantity, removeProductFromCart} = useContext(CartContext)

  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
    if (product.quantity <= 1)
      return toast.error("O produto foi removido do carrinho!");
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
    toast.error("Produto removido do carrinho!");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative bg-accent flex items-center justify-center rounded-lg h-[77px] w-[77px]">
          <Image
            src={product.images[0]
              .replace(/^\[|\]$/g, "") // Remove colchetes no início e no final
              .replace(/"(https[^"]+)"/g, "$1")}
            alt={product.title}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover h-[77px] w-[77px] rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.title}</p>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">R${product.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant={"outline"}
              size={"icon"}
              className="w-8 h-8"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeftIcon size={14} />
            </Button>
            <span className="text-xs">{product.quantity}</span>

            <Button
              variant={"outline"}
              size={"icon"}
              className="w-8 h-8"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon size={14} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size={"icon"}
        variant={"outline"}
        onClick={handleRemoveProductFromCartClick}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartItem;
