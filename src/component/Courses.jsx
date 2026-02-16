import React from "react";
import { StarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const courses = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "UI/UX Certification",
    description:
      "UI/UX Design Certification Course – Master User-Centered Design & Prototyping",
    rating: 5.0,
    price: "1,999",
    originalPrice: "16,500",
    discount: "87% off",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    textColor: "text-white",
    badgeColor: "text-green-600 bg-green-50",
  },
  {
    id: 2,
    category: "Laravel",
    title: "Full Stack Web Development in Laravel",
    description:
      "Laravel Framework Course – Build Robust PHP Applications with MVC Architecture",
    rating: 5.0,
    price: "2,499",
    originalPrice: "24,500",
    discount: "89% off",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    textColor: "text-slate-900",
    badgeColor: "text-green-600 bg-green-50",
  },
  {
    id: 3,
    category: "Digital Marketing",
    title: "Digital Marketing",
    description:
      "Digital Marketing Course – Master SEO, Social Media, PPC & Content Strategies",
    rating: 5.0,
    price: "1,999",
    originalPrice: "16,500",
    discount: "87% off",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-gradient-to-br from-orange-400 to-yellow-400",
    textColor: "text-white",
    badgeColor: "text-green-600 bg-green-50",
  },
];

const Courses = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Build Job-Ready Expertise
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Develop high-demand technical skills, work on industry-level
              projects, and gain hands-on experience that prepares you to
              confidently meet real-world employer expectations.
            </p>

            {/* Search Bar */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-full border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search courses (Python, Laravel, MERN...)"
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                {/* Card Header (Image/Gradient Area) */}
                <div
                  className={`relative h-44 ${course.color} flex items-center justify-center p-4`}
                >
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                    <StarIcon className="h-3.5 w-3.5 text-yellow-500" />
                    <span className="text-xs font-bold text-slate-800">
                      {course.rating}
                    </span>
                  </div>

                  {/* Mock Content for Visuals */}
                  <div className="text-center">
                    <h3
                      className={`text-2xl font-bold ${course.textColor} drop-shadow-sm`}
                    >
                      {course.category}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 line-through">
                          Rs. {course.originalPrice}
                        </span>
                        <span className="text-xl font-bold text-slate-900">
                          Rs. {course.price}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${course.badgeColor}`}
                      >
                        {course.discount}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="block w-full rounded-lg bg-orange-50 px-4 py-2 text-center text-sm font-semibold text-orange-600 border border-orange-100 hover:bg-orange-100 hover:border-orange-200 transition-all duration-200"
                    >
                      View Curriculum &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mt-12 px-6">
            <button className="w-full sm:w-auto bg-green-500 text-white px-10 py-3.5 rounded-sm text-lg font-semibold hover:bg-green-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
