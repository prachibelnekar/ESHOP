import React from 'react';
import { FaLocationArrow , FaMobileAlt, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "Shop",
    link: "/shop",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Eshop</a>

            <h3 className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Prachi Belnekar - vu1f2223070 </h3>
            <h3 className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Antara Kasbe - vu1f2223071 </h3>
            <h3 className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Shrushti Pawar - vu1f2223078</h3>
            <h3 className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">Tejaswini Ghawale - vu1f2223080</h3>
            <p className="text-gray-500 mt-4">Enjoying the journey of coding</p>
            <a href="https://www.youtube.com/@pvppcoemumbai3334" target="_blank" className="inline-block bg-slate-700 dark:bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">Visit Our Youtube Channel</a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300">{data.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* second column links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300">{data.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <a href="https://maps.app.goo.gl/pYPoVfVpwDiUaZze8">Vasantdada Patil Prathishthan College of Engineering</a>
                </div>
                <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>02220847226</p>
                </div>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/vasantdadapatilcollege/"><FaInstagram className="text-3xl hover:text-primary duration-300"/></a>
                  <a href="https://www.facebook.com/Vasantdadapatilpratishthancollege"><FaSquareFacebook className="text-3xl hover:text-primary duration-300"/></a>
                  <a href="https://www.linkedin.com/school/padmabhushan-vasantdada-patil-pratishthan's-college-of-engineering/?originalSubdomain=in"><FaLinkedin className="text-3xl hover:text-primary duration-300"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer