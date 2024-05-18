import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold dark:text-white">
          Everything
          <br /> is better
          <br /> with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary justify-center uppercase items-center flex gap-2 text-white px-4 py-2 rounded-full">
            <Link href={"/menu"}>Order now</Link>
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            <Link href={"/#about"}>Learn more</Link>
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          className="pizza -z-10"
          src={"/pizza.png"}
          fill
          objectFit="contain"
          priority={true}
          alt={"pizza"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
