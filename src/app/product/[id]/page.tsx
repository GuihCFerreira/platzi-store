import { getProductById, getProductsByCategory } from "@/_data/get-products";
import ProductList from "@/components/product-list";
import SectionTitle from "@/components/section-title";
import ProductImage from "./components/product-images";
import ProductInfo from "./components/product-info";

interface ProductDetailsPageProps {
  params: {
    id: number;
  };
}

const ProductPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await getProductById(params.id);
  const relatedProducts = await getProductsByCategory(product.category.id);

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImage imageUrls={product.images} name={product.title} />
      <ProductInfo product={product} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
