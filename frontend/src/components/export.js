import cheese from "../assets/images/cheese.jpg";
import delicious from "../assets/images/delicious.jpg";
import peproni from "../assets/images/peproni.jpg";
import rustica from "../assets/images/rustica.jpg";
import tomato from "../assets/images/tomato.jpg";
import vege from "../assets/images/vege.jpg";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export const pizza = [
  {
    image: cheese,
    title: "Cheese Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$1.48",
  },
  {
    image: delicious,
    title: "Delicious Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$7.01",
  },
  {
    image: peproni,
    title: "Peproni Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$3.23",
  },
  {
    image: rustica,
    title: "Rustica Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$1.98",
  },
  {
    image: tomato,
    title: "Tomato Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$4.78",
  },
  {
    image: vege,
    title: "Vege Pizza",
    para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$2.12",
  },
];

export const faqData = [
  {
    question: "What is the best pizza to eat?",
    answer:
      "The best pizza to eat is the one that you love. It's like a special treat that tastes just right. You can choose from many toppings, sizes, and crusts. Don't be afraid to try new things!",
    image: faqimg1,
  },
  {
    question: "How much does a pizza cost?",
    answer:
      "The cost of a pizza depends on the size, toppings, and crust. Generally, a medium-sized pizza costs around $10. You can find great deals on pizza places like Pizza Hut, Domino's, and Papa John's.",
    image: faqimg2,
  },
  {
    question: "Can I order a pizza online?",
    answer:
      "Yes, you can order pizza online using popular food delivery apps like Uber Eats, GrubHub, and DoorDash. Just search for 'pizza' and choose your favorite place to get your pizza delivered right to your doorstep.",
    image: faqimg3,
  },
  {
    question: "How long does it usually take to order a pizza?",
    answer:
      "The typical order time for a pizza can vary, but it usually takes around 20-30 minutes to get your pizza delivered. You can also track your order on the app or website to make sure it's on its way.",
    image: faqimg4,
  },
];

export const contactInfo = [
  {
    icon: FaMapLocationDot,
    title: "Reach Us",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem",
    link: "https://maps.google.com/maps?q=New Delhi",
    button: "Map Us",
  },
  {
    icon: MdEmail,
    title: "Email Us",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem",
    link: "mailto:demo@example.com",
    button: "Send Email",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem",
    link: "tel:9876765678",
    button: "Call Us",
  },
];

export const aboutIcons = [
  { img: icon1, name: "Pizza" },
  { img: icon2, name: "Organic" },
  { img: icon3, name: "Pizza" },
  { img: icon4, name: "Pasta" },
];
