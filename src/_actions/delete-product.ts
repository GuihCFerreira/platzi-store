"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (productId: number) => {
  await axios.delete(`https://api.escuelajs.co/api/v1/products/${productId}`);
  revalidatePath("/dashboard");
};
