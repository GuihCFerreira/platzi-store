import { Product } from "@/_model/product";
import axios from "axios";

interface ProductsResponse {
  products: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL + `products?offset=0&limit=6`
  );
  const products: Product[] = data.data;
  return products;
}

export async function getProductForSale(): Promise<Product[]> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL +
      `products?offset=0&limit=10&price_min=0&price_max=100`
  );
  const products: Product[] = data.data;
  return products;
}

export async function getProductByTitle(title: string): Promise<Product[]> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL +
      `products?offset=0&limit=10&title=${title}`
  );

  const products: Product[] = data.data;

  return products;
}

export async function getProductById(id: number): Promise<Product> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL + `products/${id}`
  );
  const product: Product = data.data;
  return product;
}

export async function getProductsByCategory(
  id: number,
  offset: number
): Promise<Product[]> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL +
      `products?categoryId=${id}&offset=${offset}&limit=6`
  );
  const products: Product[] = data.data;
  return products;
}
