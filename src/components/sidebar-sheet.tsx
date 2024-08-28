import { CATEGORY_ICON } from "@/_constants/category-icon";
import { getCategories } from "@/_data/get-categories";
import {
  HomeIcon,
  LayoutDashboard,
  ListOrderedIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = async () => {
  const categories = await getCategories();

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* <div className="flex items-center justify-between gap-3 py-5 border-b border-solid">
            {data?.user ? (
              <div className="items-center flex gap-2">
                <Avatar>
                  <AvatarImage src={data?.user?.image ?? ""} />
                </Avatar>
    
                <div>
                  <p className="font-bold">{data?.user?.name ?? ""}</p>
                  <p className="text-xs">{data?.user?.email ?? ""}</p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-bold">Olá, faça seu login!</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"icon"}>
                      <LogInIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[90%]">
                    <SignInDialog />
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div> */}

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

      <div className="flex flex-col gap-2 py-3 border-b border-solid">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href={"/dashboard"}>
            <ShoppingCartIcon size={18} />
            Carrinho
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 py-3 border-b border-solid">
        {/* {quickSearchOptions.map((option) => (
              <SheetClose key={option.title} asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href={`/barbershops?service=${option.title}`}>
                    <Image
                      src={option.imageUrl}
                      width={18}
                      height={18}
                      alt={option.title}
                    />
                    {option.title}
                  </Link>
                </Button>
              </SheetClose>
            ))} */}

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

      {/* {data?.user && (
            <div className="flex flex-col gap-2 py-5 border-solid">
              <Button
                className="justify-start gap-2"
                variant={"ghost"}
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          )} */}
    </SheetContent>
  );
};

export default SidebarSheet;
