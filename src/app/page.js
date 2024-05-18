import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4 dark:text-white">
          <p>Welcome to PizzaNirvana!</p>
          <p>
            At PizzaNirvana, every bite is a celestial experience. Our pizzas
            are more than just dishes; they are culinary masterpieces that
            transport you to a state of unparalleled pleasure. From our fresh
            ingredients to our passion for perfection, each pizza is a promise
            of happiness.
          </p>
          <p>
            At PizzaNirvana, we are dedicated to perfecting every detail to
            offer you the best gastronomic experience possible. From the first
            bite to the last, we guarantee you a feast for your senses that will
            leave you craving for more. Come and discover the pizza paradise at
            PizzaNirvana, where culinary excellence is our commitment.
          </p>
          <p>Join us on this journey to supreme flavor at PizzaNirvana!</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500 dark:text-white"
            href="tel:+50250567632"
          >
            +502 50567632
          </a>
        </div>
      </section>
    </>
  );
}
