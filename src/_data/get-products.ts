import myfetch from "@/_lib/myfetch";
import { Product } from "@/_model/product";

interface ProductsResponse {
  products: Product[];
}

export async function getProducts(): Promise<ProductsResponse> {
  const data: ProductsResponse = await myfetch.get("products?offset=0&limit=5");
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const data: Product = await myfetch.get(`products/${id}`);
  return data;
}

export async function getProductsByCategory(id: number): Promise<Product[]> {
  const data: Product[] = await myfetch.get(
    `products?categoryId=${id}&offset=0&limit=10`
  );
  return data;
}
