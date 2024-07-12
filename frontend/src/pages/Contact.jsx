import contact1 from "../assets/images/contact1.jpg";
import { useDarkMode } from "../DarkModeContext";
import { contactInfo } from "../components/export.js";
import { useEffect } from "react";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id="contact"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 py-10 h-fit flex flex-col justify-center items-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${contact1})` }}
    >
      <div className="lg-w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-l-[10px] border-orange-500"
          >
            <div
              id="icon-box"
              className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-[35px] h-[35px]" />
            </div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              {item.title}
            </h1>
            <p className="text-center text-lg dark:text-white text-slate-800">
              {item.para}
            </p>
            <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">
              <a href={item.href} target="_blank">
                {item.button}
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
