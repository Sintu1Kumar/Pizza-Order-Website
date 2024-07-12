import { useDarkMode } from "../DarkModeContext";
import { Accordion } from "flowbite-react";
import { useEffect } from "react";
import { faqData } from "../components/export.js";
import AOS from "aos";

function Faq() {
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
      id="faq"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-14`}
    >
      <div
        id="left"
        className="flex flex-col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoon-in"
          className="text-4xl text-black font-bold text-center dark:text-white"
        >
          Frequently Asked Questions
        </h1>
        <div data-aos="slide-up" className="w-full">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <Accordion.Panel>
                <Accordion.Title className="border-none text-black text-lg">
                  {item.question}
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          ))}
        </div>
        <button
          data-aos="flip-up"
          className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Contact US
        </button>
      </div>
      <div
        id="image box"
        className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4"
      >
        {faqData.map((item, index) => (
          <img
            key={index}
            data-aos="zoom-in"
            src={item.image}
            alt="faq image"
            className="w-[400px] h-[300px] rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
