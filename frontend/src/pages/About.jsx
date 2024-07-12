import about1 from "../assets/images/about1.jpg";
import { useDarkMode } from "../DarkModeContext";
import { aboutIcons } from "../components/export.js";
import { Link } from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  return (
    <>
      <section
        id="about"
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}
      >
        {aboutIcons.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay="200"
            className="border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.img}
              className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black dark:text-white text-2xl font-lg text-center">
              {item.name}
            </h1>
          </div>
        ))}
      </section>

      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } w-full lg:px-20 px-10 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            src={about1}
            alt="about image"
            className="lg:w-[800px] lg:h-[600px] rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1
            data-aos="zoom-in"
            className="text-2xl text-black dark:text-white font-semibold text-center"
          >
            WELCOME TO
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black dark:text-white font-bold text-center"
          >
            Pizzazz Pies
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl text-slate-800 dark:text-slate-100 text-center"
          >
            Ordering a pizza can be done easily by calling a pizzeria or using a
            food delivery app. You simply choose your favorite toppings, specify
            the size, and provide your delivery address. Pizza is then prepared
            and delivered hot and fresh to your doorstep.
          </p>
          <button
            data-aos="flip-up"
            className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Link to="best-seller">ORDER NOW</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
