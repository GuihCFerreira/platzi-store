import myfetch from "@/_lib/myfetch";
import { Category } from "@/_model/category";
import { Product } from "@/_model/product";

interface CategoryProductsResponse {
  products: Product[];
}

interface CategoryResponse {
  categories: Category[];
}

export async function getCategories(): Promise<CategoryResponse> {
  const data: CategoryResponse = await myfetch.get("categories");
  return data;
}
