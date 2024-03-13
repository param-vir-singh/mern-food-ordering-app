import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to MernEats.com</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button
            onClick={() => loginWithRedirect()}
            className="flex-1 font-bold bg-orange-500 mb-10"
          >
            Log In
          </Button>
        </SheetDescription>

        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500 mb-10">
            <Link to="/">Home Page</Link>
          </Button>
        </SheetDescription>

        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500 mb-10">
            <Link to="user-profile">User Profile Page</Link>
          </Button>
        </SheetDescription>

        <SheetFooter>
          <SheetClose className="flex">
            <Button className="flex-1 font-bold bg-blue-400 py-4">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
