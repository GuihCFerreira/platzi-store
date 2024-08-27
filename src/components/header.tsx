import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
//import SidebarSheet from "./sidebar-sheet";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" height={10} width={120} alt="FSW Barber" />
        </Link>

        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          {/* <SidebarSheet /> */}
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
