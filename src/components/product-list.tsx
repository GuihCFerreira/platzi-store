import { Product } from "@/_model/product";
import ProductItem from "./product-item";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="min-w-[170px] max-w-[170px]">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
