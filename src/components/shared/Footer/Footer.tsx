
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Chaudri CPA</h3>
            <p className="text-sm">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Tax Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                Individual Tax Preparation
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                Business Tax Preparation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                Company Email:{" "}
                <a href="mailto:portfo@gmail.com" className="hover:text-white">
                  portfo@gmail.com
                </a>
              </li>
              <li>
               Office Phone:{" "}
                <a href="tel:8667109709" className="hover:text-white">
                  (866) 710-9709
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2024 Chaudri CPA. All rights reserved. <br /> <small>
             Designed and Developed by Solvierntech and Pirala Join Venture
            </small></p>
            
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.495V14.708H9.428v-3.637h3.392V8.259c0-3.356 2.006-5.191 5.061-5.191 1.466 0 2.993.261 2.993.261v3.29h-1.686c-1.663 0-2.18 1.038-2.18 2.095v2.403h4.358l-.696 3.637h-3.662V24h7.181c.729 0 1.322-.593 1.322-1.325V1.325C24 .593 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a href="#twitter" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.385-1.83.637-2.825.75 1.014-.607 1.794-1.569 2.163-2.723-.949.563-2.003.975-3.127 1.195-.896-.959-2.173-1.558-3.594-1.558-2.717 0-4.92 2.206-4.92 4.917 0 .385.045.76.127 1.124-4.083-.205-7.699-2.16-10.126-5.134-.423.724-.666 1.562-.666 2.455 0 1.695.862 3.19 2.169 4.065-.8-.025-1.554-.246-2.212-.616v.062c0 2.366 1.683 4.343 3.918 4.793-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.415-1.685 1.319-3.808 2.107-6.102 2.107-.395 0-.779-.023-1.162-.068 2.177 1.396 4.768 2.212 7.557 2.212 9.054 0 14.004-7.496 14.004-13.986 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#linkedin" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.271V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.056h3.56v11.396zM5.342 7.519c-1.14 0-2.064-.93-2.064-2.072 0-1.142.924-2.072 2.064-2.072 1.144 0 2.072.93 2.072 2.072 0 1.142-.928 2.072-2.072 2.072zM20.452 20.452h-3.558v-5.787c0-1.379-.026-3.154-1.922-3.154-1.924 0-2.218 1.504-2.218 3.055v5.886h-3.56V9.056h3.42v1.553h.05c.475-.897 1.635-1.841 3.365-1.841 3.601 0 4.268 2.368 4.268 5.453v6.231z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
