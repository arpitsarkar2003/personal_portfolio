
import Header from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "./components/Footer";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="border-t-4 border-black dark:border-white dark:bg-darkBackground bg-[#FFFFF0]">

      {/* header */}
      <div id="Header" className="md:h-[90vh] md:pb-0 pb-10 border-b dark:border-white">
        <div><Header /></div>
      </div>

      {/* about */}
      <div id="About" className="md:pb-20 pb-10 border-b dark:border-white">
        <div><About /></div>
      </div>

      <div id="Work" className="md:pb-20 pb-10 border-b dark:border-white">
        <div><Work /></div>
      </div>

      {/* Projects */}
      <div id="Projects" className="md:pb-20 pb-10 border-b dark:border-white">
        <div><Projects /></div>
      </div>


      {/* contact */}
      <div id="Contact" className="md:h-[70vh] md:pb-0 pb-10">
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
