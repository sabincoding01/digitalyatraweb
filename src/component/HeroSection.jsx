import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold text-slate-600 sm:text-2xl">
              Learn. Build. Connect. Grow.
            </h2>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Digital <span className="text-orange-500">Yatra</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              At Digital Yatra, students begin their tech journey by learning
              key skills, building real projects, connecting with peers, and
              growing into future-ready professionals. It's more than learning —
              it's a path to digital success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="#"
                className="w-full sm:w-auto rounded-full border border-slate-400 px-8 py-3 text-base font-semibold text-slate-700 hover:bg-green-400 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="w-full sm:w-auto rounded-full border border-slate-400 px-8 py-3 text-base font-semibold text-slate-700 hover:bg-green-400 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Join Courses
              </a>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="relative lg:col-span-1 order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              alt="Programming laptop"
              className="aspect-video lg:aspect-4/3 w-full rounded-2xl sm:rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 border-t border-gray-200 pt-10 sm:mt-24">
          <dl className="grid grid-cols-1 gap-y-8 gap-x-8 text-center sm:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <dd className="order-first text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl">
                24+
              </dd>
              <dt className="text-sm leading-6 text-slate-500 sm:text-base">
                Partner Colleges
              </dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <dd className="order-first text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl">
                17M
              </dd>
              <dt className="text-sm leading-6 text-slate-500 sm:text-base">
                Students Enrolled
              </dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <dd className="order-first text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl">
                +95%
              </dd>
              <dt className="text-sm leading-6 text-slate-500 sm:text-base">
                Student satisfaction
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
