import React from "react";
import {
  DocumentTextIcon,
  UserGroupIcon,
  GlobeAltIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "POSTER DESIGN",
    description: [
      "We design eye-catching posters",
      "for your business, school, or organization.",
      "Custom visuals that tell your story.",
      "Stand out, connect, and make an impact.",
    ],
    icon: DocumentTextIcon,
  },
  {
    title: "WORKSHOP",
    description: [
      "We organize interactive workshops",
      "for schools, colleges, and peer groups.",
      "Tailored sessions to educate and inspire.",
      "Boost creativity, skills, and collaboration.",
    ],
    icon: UserGroupIcon,
  },
  {
    title: "DIGITAL AWARENESS",
    description: [
      "Empowering minds through digital awareness.",
      "Workshops for schools, colleges, and communities.",
      "Learn online safety, digital literacy, and smart usage.",
      "Stay informed, stay secure, stay ahead.",
    ],
    icon: GlobeAltIcon,
  },
  {
    title: "ADS MAKING",
    description: [
      "We create compelling ads that grab attention.",
      "For businesses, events, products, and services.",
      "From concept to creation, we craft with impact.",
      "Drive engagement, boost visibility, and grow.",
    ],
    icon: VideoCameraIcon,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Contact Button */}

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Other Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-slate-300">
                <service.icon
                  className="h-8 w-8 text-slate-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm font-bold leading-7 text-slate-500 uppercase tracking-widest mb-4">
                {service.title}
              </h3>
              <div className="text-base leading-7 text-slate-600 space-y-1">
                {service.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Partner Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-green-500 text-white px-8 py-3 rounded-sm text-lg font-medium hover:bg-green-900 transition-colors">
            Let's Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
