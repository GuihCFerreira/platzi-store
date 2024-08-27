import { CATEGORY_ICON } from "@/_constants/category-icon";
import { getProductsByCategory } from "@/_data/get-products";
import ProductItem from "@/components/product-item";
import { Badge } from "@/components/ui/badge";

interface CategoryProductsProps {
  params: {
    id: number;
  };
}

const CategoryPage = async ({ params }: CategoryProductsProps) => {
  const products = await getProductsByCategory(params.id);
  const category = products[0].category;

  console.log(category);

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2 w-fit"
        variant={"outline"}
      >
        {CATEGORY_ICON[category.name as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
