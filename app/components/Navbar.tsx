import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="size-10" />
        <h4 className="text-3xl font-semibold">
          Cal<span className="text-primary">Marshal</span>
        </h4>
      </Link>

      <div className="hidden md:flex md:justify-end md:space-x-4">
        <ThemeToggle />
        <AuthModal />
      </div>
    </div>
  );
}
