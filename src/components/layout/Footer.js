import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxLine, RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t pt-8 text-center text-gray-500 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-lg grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mx-auto">
          <div className="flex justify-around mb-4 md:mb-0 md:border-r-2 border-gray-500">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
          </div>
          <div className="flex justify-around items-center text-2xl">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/filiberto-castro-198823272/"
            >
              <RiLinkedinBoxLine />
            </Link>
            <Link href="mailto:fcastrob210@gmail.com">
              <MdEmail />
            </Link>
            <Link target="_blank" href="https://github.com/Filiberto-Castro">
              <RiGithubFill />
            </Link>
            <Link href="tel:+50250567632">
              <RiPhoneFill />
            </Link>
          </div>
        </div>
        <div className="my-8 text-primary text-3xl font-bold">
          <a
            className="hover:shadow-md transition ease-in p-2 rounded-full"
            target="_blank"
            href="https://codedev-portfolio.netlify.app/"
          >
            {"{ Code Dev }"}
          </a>
        </div>
        <div className="grid grid-rows-3 md:grid-rows-1 gap-y-2 md:gap-y-0 md:grid-cols-3 max-w-md mx-auto">
          <p className="hover:text-primary">Filiberto Castro</p>
          <p className="hover:text-primary">+502 50567632</p>
          <p className="hover:text-primary">Guatemala</p>
        </div>
      </div>
    </footer>
  );
}
