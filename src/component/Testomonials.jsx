import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    id: 1,
    name: "Sabin Timalsina",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
    feedback:
      "The dedicated learning environment and expert mentorship have been transformative for my career. The hands-on projects gave me the confidence I needed.",
  },
  {
    id: 2,
    name: "Saroj Timalsina",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    feedback:
      "I was amazed by the depth of the curriculum. The instructors are industry experts who truly care about student success. Highly recommended!",
  },
  {
    id: 3,
    name: "Maxin Will",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
    feedback:
      "The practical approach to learning tech skills here is unmatched. It bridged the gap between theory and real-world application perfectly for me.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements can go here if needed */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-serif">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hear from our community about their learning journey and success
            stories.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative flex flex-col justify-center items-center text-center p-8 sm:p-10 bg-white border border-slate-200 
              rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl
              shadow-lg hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 
              transition-all duration-500 ease-out"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 left-6 text-9xl text-slate-100 font-serif opacity-50 select-none -z-10 group-hover:text-blue-50 transition-colors duration-300">
                &ldquo;
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-100 scale-110 blur-sm group-hover:scale-125 transition-transform duration-500"></div>
                <img
                  className="relative h-20 w-20 rounded-full border-4 border-white shadow-md object-cover mb-6 group-hover:scale-105 transition-transform duration-300"
                  src={review.image}
                  alt={review.name}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                {review.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-4">
                {review.role}
              </p>

              <div className="flex items-center gap-1 mb-6 bg-slate-50 px-4 py-1.5 rounded-full">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${
                      rating < review.rating
                        ? "text-amber-400"
                        : "text-slate-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed italic relative z-10">
                "{review.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
