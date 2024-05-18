"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "./../icons/ShoppingCart";
import Bars2 from "./../icons/Bars2";
import { usePathname } from "next/navigation";
import Moon from "./../icons/Moon";
import Sun from "./../icons/Sun";
import Image from "next/image";

function AuthLinks({ status, userName, userImage }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap headers">
          {userImage ? (
            <Image
              className="rounded-full"
              src={userImage}
              width={150}
              height={150}
              priority={true}
              alt={"avatar"}
            />
          ) : (
            userName
          )}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link className="headers" href={"/login"}>
          Login
        </Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2 dark:hover:bg-white dark:hover:text-black"
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  let userImage = userData?.image;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    return savedTheme !== null
      ? savedTheme
      : typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : null;
  });
  const [isDark, setIsDark] = useState(false);

  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (selectedTheme) => {
    if (selectedTheme === "dark") {
      document.querySelector("html").classList.add("dark");
      setIsDark(true);
    } else {
      document.querySelector("html").classList.remove("dark");
      setIsDark(false);
    }
  };

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    // Guarda el nuevo tema en localStorage
    localStorage.setItem("theme", newTheme);
    // Aplica el nuevo tema
    applyTheme(newTheme);
    // Actualiza el estado
    setTheme(newTheme);
  };

  return (
    <header className="">
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          PizzaNirvana
        </Link>
        <div className="flex gap-8 items-center">
          <button
            onClick={handleChangeTheme}
            className="border-0 py-1 px-1 text-black"
          >
            {isDark ? <Moon /> : <Sun />}
          </button>
          <Link href={"/cart"} className="relative dark:text-white">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border-0"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center dark:text-white dark:bg-[#353842]"
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-6 lg:gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            PizzaNirvana
          </Link>
          <Link className="headers" href={"/"}>
            Home
          </Link>
          <Link className="headers" href={"/menu"}>
            Menu
          </Link>
          <Link className="headers" href={"/#about"}>
            About
          </Link>
          <Link className="headers" href={"/#contact"}>
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-2 text-gray-500 font-semibold justify-around">
          <button
            onClick={handleChangeTheme}
            className="border-0 py-1 px-1 text-black dark:text-white"
          >
            {isDark ? <Moon /> : <Sun />}
          </button>
          <AuthLinks
            status={status}
            userName={userName}
            userImage={userImage}
          />
          <Link href={"/cart"} className="relative dark:text-white">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
