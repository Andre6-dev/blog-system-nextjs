import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";
import SearchBar from "./SearchBar";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* LOGO */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>

        {/* SEARCH BAR */}
        {/* <SearchBar /> */}

        {/* ACTIONS */}
        {session?.user ? (
          <div className="flex flex-row">
            <UserAccountNav
              // user={{
              //   image: `${session.user}`,
              //   name: `${session.user}`,
              //   email: `${session.user}`,
              // }}
              user={session.user}
            />
            <p className="pt-2 font-medium">{session.user.name}</p>
          </div>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
