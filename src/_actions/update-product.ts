"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { CreateProductProps } from "./create-product";

export interface UpdateProductProps extends CreateProductProps {
  productId: number;
}

export const updateProduct = async ({
  product,
  productId,
}: UpdateProductProps) => {
  await axios.put(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    product
  );
  revalidatePath("/dashboard");
};
