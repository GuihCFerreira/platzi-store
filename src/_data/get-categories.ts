import { Category } from "@/_model/category";
import { Product } from "@/_model/product";
import axios from "axios";

interface CategoryProductsResponse {
  products: Product[];
}

interface CategoryResponse {
  categories: Category[];
}

export async function getCategories(): Promise<Category[]> {
  const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `categories`);
  const categories: Category[] = data.data;
  return categories;
}

export async function getCategoryById(id: number): Promise<Category> {
  const data = await axios.get(
    process.env.NEXT_PUBLIC_BASE_URL + `categories/${id}`
  );

  const category: Category = data.data;
  return category;
}
