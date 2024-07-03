/* eslint-disable no-unused-vars */
import Banner from "/public/images/landing/hero-landing.webp";
import Navbar from "@/Components/Navbar";
import TrendList from "@/Components/TrendList";
import {FaBlenderPhone} from "react-icons/fa";
import ProductCard from "@/Components/ProductCard";
import ProductItems from "@/data";
const Landing = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <div>
          <img
            src={Banner}
            alt="landing banner"
            width={"100%"}
            height={"100%"}
            className="object-cove rounded-md"
          />
        </div>

        <section className="my-4 space-y-4 overflow-hidden">
          <h1 className="font-bold">Trend Categories</h1>
          {/* trending wrapper */}
          <div className="carousel carousel-center gap-4">
            <div className="carousel-item ">
              <TrendList TrendText="Gadgets" TrendIcons={<FaBlenderPhone size={30} />} />
            </div>
            <div className="carousel-item ">
              <TrendList TrendText="Gadgets" TrendIcons={<FaBlenderPhone size={30} />} />
            </div>
            <div className="carousel-item ">
              <TrendList TrendText="Gadgets" TrendIcons={<FaBlenderPhone size={30} />} />
            </div>
            <div className="carousel-item ">
              <TrendList TrendText="Gadgets" TrendIcons={<FaBlenderPhone size={30} />} />
            </div>
            <div className="carousel-item ">
              <TrendList TrendText="Gadgets" TrendIcons={<FaBlenderPhone size={30} />} />
            </div>
          </div>
          {/* trending list */}
        </section>

        <section className="my-4 space-y-4">
          <h1 className="font-bold">New Products</h1>
          {/* card wrapper */}
          <div className="w-full grid grid-cols-2 gap-4">
            {ProductItems.map((item, i) => (
              <ProductCard
                key={i}
                id={item.id}
                imgName={item.img}
                title={item.name}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
