import myfetch from "@/_lib/myfetch";
import { Category } from "@/_model/category";
import { Product } from "@/_model/product";

interface CategoryProductsResponse {
  products: Product[];
}

interface CategoryResponse {
  categories: Category[];
}

export async function getCategories(): Promise<Category[]> {
  const data: Category[] = await myfetch.get("categories");
  return data;
}

export async function getCategoryById(id: number): Promise<Category> {
  const data: Category = await myfetch.get(`categories/${id}`);
  return data;
}
