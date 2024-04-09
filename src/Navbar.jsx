import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode.jsx";
import { NavLink , Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { BiCart} from "react-icons/bi";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },

];

const Navbar = ({ handleOrderPopup }) => {
  const {
    isEmpty , totalItems,
  } = useCart();
  console.log(isEmpty , totalItems);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Eshop</a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-8 ml-8">
                <li className="nav-item">
                  <NavLink activeclassname="menu_active" exact className="nav-link" aria-current="page" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeclassname="menu_active" className="nav-link" to="/Shop">Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeclassname="menu_active" className="nav-link" to="/blogs">Blogs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeclassname="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                </li>
                
                <li className="nav-item">
                <NavLink activeclassname="menu_active" className="nav-link" to="/signIn">Sign In</NavLink>
              </li>
              

              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}

            <Link
            to="/cart"
           
          >
            <BiCart size="2rem"/>
            {!isEmpty && <span className="relative left-[-21px] top-[-18px]">{totalItems}</span>}
            <span className={isEmpty ? "" : "ml-[-13px]"}>&nbsp;Cart</span>
          </Link>
         

            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center