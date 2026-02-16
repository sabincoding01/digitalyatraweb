import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-900">
              Digital<span className="text-orange-500">Yatra</span>
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold text-slate-600 hover:text-orange-500 transition-colors duration-300 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="#"
            className="rounded-full border border-blue-900 px-6 py-2 text-md font-semibold text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            Student Portal
          </a>
          <a
            href="#"
            className="rounded-full bg-linear-to-r from-lime-500 to-lime-600 px-6 py-2 text-md font-semibold text-white shadow-sm hover:from-lime-600 hover:to-lime-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900">
                  Digital<span className="text-orange-500">Yatra</span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <a
                    href="#"
                    className="block w-full text-center rounded-full border border-blue-900 px-3 py-2.5 text-base font-semibold text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    Student Portal
                  </a>
                  <a
                    href="#"
                    className="block w-full text-center rounded-full bg-linear-to-r from-lime-500 to-lime-600 px-3 py-2.5 text-base font-semibold text-white shadow-sm hover:from-lime-600 hover:to-lime-700 hover:shadow-lg transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
