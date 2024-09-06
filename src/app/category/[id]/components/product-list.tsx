interface CardProductListProps {
  title: string | null;
  categoryId: number | null;
  offset: number;
}

const ProductList = async ({
  title,
  categoryId,
  offset,
}: CardProductListProps) => {
  //const products = categoryId && (await getProductsByCategory(categoryId, 0));

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* {products?.length > 0 ? (
        <>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p className="items-center">
          Nenhum produto encontrado para essa categoria ...
        </p>
      )} */}
    </div>
  );
};

export default ProductList;
