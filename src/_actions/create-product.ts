"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export interface CreateProductProps {
  product: {
    title?: string;
    description?: string;
    price?: number;
    categoryId?: number;
    images?: string[];
  };
}

export const createProduct = async ({ product }: CreateProductProps) => {
  await axios.post(`https://api.escuelajs.co/api/v1/products`, product);
  revalidatePath("/dashboard");
};
