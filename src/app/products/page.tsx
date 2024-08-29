import { getProductByTitle } from "@/_data/get-products";
import ProductItem from "@/components/product-item";
import Search from "@/components/search";
import SectionTitle from "@/components/section-title";

interface ProductsPageProps {
  searchParams: {
    title: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const products = await getProductByTitle(searchParams.title);

  return (
    <div className="flex flex-col gap-8 p-5">
      <Search />

      <SectionTitle>Resultados para {searchParams.title}</SectionTitle>

      <div className="grid grid-cols-2 gap-8 px-5">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p className="items-center">
            Nenhum produto encontrado para essa busca...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
