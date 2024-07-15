import Header from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="border-t-4 border-black dark:border-white dark:bg-darkBackground">

      {/* header */}
      <div id="Header" className="h-[90vh] border-b dark:border-white">
        <div><Header /></div>
      </div>

      {/* about */}
      <div id="About" className="h-[95vh] border-b dark:border-white">
        <div><About /></div>
      </div>

      {/* Projects */}
      <div id="Projects" className="h-[90vh] border-b dark:border-white">
        <div><Projects /></div>
      </div>


      {/* contact */}
      <div id="Contact" className="h-[70vh]">
        <div><Contact /></div>
      </div>

        <div className="h-[10vh]">
          <Footer />
        </div>



      {/* ScrollToTopButton  */}
      <ScrollToTopButton />
    </div>
  );
}
