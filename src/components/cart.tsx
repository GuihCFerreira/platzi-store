"use client";

import { CartContext } from "@/_providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import CartItem from "./cart-item";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const Cart = () => {
  //const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  const { products, total } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center font-semibold">Carrinho vazio. </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />
          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R${total.toFixed(2)}</p>
          </div>

          <Button className="mt-7 font-bold uppercase">
            {" "}
            finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
