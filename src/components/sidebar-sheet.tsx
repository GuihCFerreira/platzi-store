import { CATEGORY_ICON } from "@/_constants/category-icon";
import { getCategories } from "@/_data/get-categories";
import { HomeIcon, LayoutDashboard, ListOrderedIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = async () => {
  const categories = await getCategories();

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <SheetContent side={"left"}>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-2 py-3 border-b border-solid">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={"ghost"} asChild>
            <Link href={"/"}>
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href={"/catalog"}>
              <ListOrderedIcon size={18} />
              Catálogo
            </Link>
          </Button>
        </SheetClose>
      </div>

      <ScrollArea className="h-75 w-full border-b border-solid">
        <div className="flex flex-col gap-2 py-3">
          {categories.map((option) => (
            <SheetClose key={option.name} asChild>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href={`/category/${option.id}`}>
                  {CATEGORY_ICON[option.name as keyof typeof CATEGORY_ICON]}
                  {option.name}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-2 py-2 border-solid">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href={"/dashboard"}>
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </Button>
        </SheetClose>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
