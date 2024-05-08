import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Intro from "./component/Intro";
import Product from "./component/Product";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between py-4 w-11/12 md:w-9/12 mx-auto ">
        <Slider />
        <Intro />
        <Product />
      </main>
      <Footer />
    </>
  );
}
