import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="items-center text-center justify-between">
          <a
            href="https://flowbite.com"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ProductBite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{"   "}
          <a href="/" className="hover:underline">
            ProductBite™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
