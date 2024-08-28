import { CATEGORY_ICON } from "@/_constants/category-icon";
import { getCategories } from "@/_data/get-categories";
import { getProductForSale, getProductsByCategory } from "@/_data/get-products";
import ProductList from "@/components/product-list";
import Search from "@/components/search";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const productsOffer = await getProductForSale();
  const shoes = await getProductsByCategory(4);
  const electronics = await getProductsByCategory(2);
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="px-5">
        <Search />
      </div>

      <Image
        alt="Platzi Fake Api"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full px-5 rounded-lg"
        src={"/banner.png"}
      />

      <div className="flex gap-3 px-4 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
        {categories.map((option) => (
          <Button variant="secondary" className="gap-2" key={option.id} asChild>
            <Link href={`/category/${option.id}`}>
              {CATEGORY_ICON[option.name as keyof typeof CATEGORY_ICON]}
              {option.name}
            </Link>
          </Button>
        ))}
      </div>

      <div>
        <SectionTitle className="font-bold uppercase pl-5 mb-3">
          Ofertas
        </SectionTitle>
        <ProductList products={productsOffer} />
      </div>

      <Image
        alt="Eletronicos"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full px-5 rounded-lg"
        src={"/electronics.png"}
      />

      <div>
        <SectionTitle className="font-bold uppercase pl-5 mb-3">
          Eletrônicos
        </SectionTitle>
        <ProductList products={electronics} />
      </div>

      <Image
        alt="Sapatos"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full px-5 rounded-lg"
        src={"/shoes.png"}
      />

      <div>
        <SectionTitle className="font-bold uppercase pl-5 mb-3">
          Sapatos
        </SectionTitle>
        <ProductList products={shoes} />
      </div>
    </div>
  );
}
