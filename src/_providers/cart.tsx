"use client";

import { Product } from "@/_model/product";
import { createContext, ReactNode, useMemo, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  total: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  total: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  }, [products]);

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const removeProductFromCart = (productId: number) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        total,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
