import { Category } from "@/_model/category";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="flex flex-col ">
        <div className="border-solid border-accent border-2 border-x border-t rounded-t-lg flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg relative">
          <Image
            src={category.image}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            fill
            className="object-cover rounded-tl-lg rounded-tr-lg"
          />
        </div>

        <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
          <p className="font-semibold text-sm text-center">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
