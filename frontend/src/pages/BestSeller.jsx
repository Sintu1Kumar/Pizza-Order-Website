import { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import { pizza } from "../components/export.js";
import AOS from "aos";

function BestSeller() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  return (
    <section
      id="best-seller"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } h-fit w-full lg:px-20 px-3 py-10 flex flex-col justify-center items-center gap-14`}
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl text-black dark:text-white font-bold text-center"
      >
        Our Best Sellers
      </h1>
      <div
        data-aos="slide-up"
        className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6"
      >
        {pizza.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 flex flex-col justify-center items-center gap-4 rounded-lg"
          >
            <img
              src={item.image}
              alt="pizza image"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-2xl font-bold dark:text-white">
              {item.title}
            </h1>
            <h1 className="text-orange-600 font-bold text-3xl">{item.price}</h1>
            <p className="text-lg text-slate-800 dark:text-white text-center">
              {item.para}
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
