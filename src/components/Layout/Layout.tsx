import { Faq } from "../../views/Faq/Faq";
import { Footer } from "../../views/Footer/Footer";
import { Hero } from "../../views/Hero/Hero";
export function Layout() {
  return (
    <>
      <Hero />
      <Faq className="py-24" />
      <Footer />
    </>
  );
}
