import { Product } from "@/_model/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card className=" rounded-2xl">
      <CardContent className="flex px-2 py-2">
        <Image
          src={product.images[0]}
          width={80}
          height={90}
          alt={product.title}
          className="rounded-sm"
        />
        <div className="ml-3 flex  flex-1 flex-col items-center">
          <p className="truncate text-sm">{product.title}</p>
          <p className=" text-sm">R$ {product.price.toFixed(2)}</p>

          <div className="flex gap-2 mt-1">
            <Button variant={"outline"} className="text-xs">
              Editar
            </Button>
            <Button variant={"destructive"} className="text-xs">
              Excluir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
