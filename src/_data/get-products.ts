import myfetch from "@/_lib/myfetch";
import { Product } from "@/_model/product";

interface ProductsResponse {
  products: Product[];
}

export async function getProducts(): Promise<ProductsResponse> {
  const data: ProductsResponse = await myfetch.get("products");
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const data: Product = await myfetch.get(`products/${id}`);
  return data;
}
