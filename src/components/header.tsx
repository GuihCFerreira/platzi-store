import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
//import SidebarSheet from "./sidebar-sheet";
import Link from "next/link";
import Cart from "./cart";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
        <div className="flex gap-3">
          <Link href="/">
            <Image src="/logo.png" height={10} width={120} alt="FSW Barber" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="ghost">
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
