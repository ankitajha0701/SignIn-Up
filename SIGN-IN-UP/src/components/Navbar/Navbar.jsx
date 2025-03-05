import React from "react";

const Navbar = ({ handleLoginPopup }) => {
  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm">
        <div className="container">
          <nav className="flex justify-between items-center">
            
            <div className="hidden sm:block">
              <ul className="flex font-semibold justify-center items-center gap-4">
                
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* hamburger menu */}
            <div className="block sm:hidden">
              <button
                onClick={handleLoginPopup}
                className="text-gray-700 text-xl font-semibold hover:text-gray-900 px-4 py-4 inline-block"
              >
                Login
              </button>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
