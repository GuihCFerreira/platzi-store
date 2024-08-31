"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export interface CreateProductProps {
  product: {
    title: string | null;
    description: string | null;
    price: number | null;
    categoryId: number | null;
    images: string[] | null;
  };
}

export const createProduct = async ({ product }: CreateProductProps) => {
  await axios.post(`https://api.escuelajs.co/api/v1/products`, product);
  revalidatePath("/dashboard");
};
