import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/shared/ui/ScrollToTopButton ";

const Body = () => {
  return (
    <div className="bg-purple-50">
      <div className="px-4 sm:px-6 md:px-10 py-6 flex flex-col gap-20">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Body;
