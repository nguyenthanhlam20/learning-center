import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import { SIGNIN_CONSTANTS, SIGNUP_CONSTANTS } from "../../constants/constants";
import Logo from "../../assets/images/logo/logo.png";
import { AccountPopover } from "../../layouts/dashboard/account-popover";
import { usePopover } from "../../hooks/use-popover";
import React from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Header = (props) => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const accountPopover = usePopover();
  const user = useSelector((state) => state.authen.user);
  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full  items-center bg-transparent ${
        sticky
          ? "!fixed !z-[99] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative  flex items-center justify-between">
          <div className="w-96">
            <Link
              to="/"
              className={`header-logo block flex items-center  ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <img src={Logo} alt="logo" width={80} height={80} />
              <span className="ml-5 text-2xl font-bold">Seed Center</span>
            </Link>
          </div>
          <div className="ml-5 flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          to={menuItem.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <a
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          <div
                            className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem) => (
                              <Link
                                to={submenuItem.path}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {user != null ? (
              <>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <div className="mr-2 font-bold"> {user?.name}</div>
                  <Avatar
                    onClick={accountPopover.handleOpen}
                    ref={accountPopover.anchorRef}
                    sx={{
                      cursor: "pointer",
                      height: 40,
                      width: 40,
                    }}
                    src={
                      user.avatar_url != null
                        ? user.avatar_url
                        : "/assets/avatars/avatar-anika-visser.png"
                    }
                  />
                </div>
                <AccountPopover
                  account={user}
                  anchorEl={accountPopover.anchorRef.current}
                  open={accountPopover.open}
                  onClose={accountPopover.handleClose}
                />
              </>
            ) : (
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  to={ROUTE_CONSTANTS.SIGN_IN}
                  className="hidden px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                >
                  {SIGNIN_CONSTANTS.SIGN_IN_TITLE}
                </Link>
                <Link
                  to={ROUTE_CONSTANTS.SIGN_UP}
                  className="ease-in-up hidden rounded-md bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  {SIGNUP_CONSTANTS.SIGN_UP_TITLE}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
