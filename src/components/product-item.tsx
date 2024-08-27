import { Product } from "@/_model/product";
import Image from "next/image";
import Link from "next/link";
interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const correctedImageString = product.images[0]
    .replace(/^\[|\]$/g, "") // Remove colchetes no início e no final
    .replace(/"(https[^"]+)"/g, "$1");

  return (
    <Link href={`/product`}>
      <div className="flex flex-col gap-4 ">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={correctedImageString}
            height={0}
            width={0}
            sizes="100vw"
            fill
            className="object-cover rounded-sm"
            alt={product.description}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.title}
          </p>

          <div className="flex items-center gap-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
              R${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
