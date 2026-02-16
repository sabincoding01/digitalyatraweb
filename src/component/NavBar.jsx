import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTopBarVisibility } from "../context/TopBarContext";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isTopBarVisible } = useTopBarVisibility();

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <header
      className={`bg-white shadow-sm fixed w-full z-50 transition-all duration-300 ${
        isTopBarVisible ? "top-10" : "top-0"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-900">
              {/* Placeholder Icon inspired by the image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.884c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-slate-800">
                Digital<span className="text-orange-500">Yatra</span>
              </span>
              <span className="text-[10px] text-slate-500 -mt-1">
                Youth & Technologies
              </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-orange-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-slate-700 border border-slate-300 px-4 py-1.5 rounded-full hover:bg-blue-900 hover:text-white transition-all"
          >
            Student Portal
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white bg-green-500 px-4 py-1.5 rounded-full hover:bg-green-600 transition-all"
          >
            Contact Us
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Student Portal
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white bg-green-500 hover:bg-green-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
