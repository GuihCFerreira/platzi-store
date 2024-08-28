"use server";

import myfetch from "@/_lib/myfetch";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (productId: number) => {
  await myfetch.delete(`products/${productId}`);
  revalidatePath("/dashboard");
};
