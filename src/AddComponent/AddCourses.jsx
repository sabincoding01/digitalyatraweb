import React, { useState } from "react";
import {
  AcademicCapIcon,
  CurrencyRupeeIcon,
  TagIcon,
  PhotoIcon,
  DocumentTextIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

const AddCourses = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    originalPrice: "",
    discount: "",
    image: "",
    rating: "5.0", // Default rating
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-calculate discount if prices are provided
    if (name === "price" || name === "originalPrice") {
      const p = name === "price" ? value : formData.price;
      const op = name === "originalPrice" ? value : formData.originalPrice;

      if (p && op && !isNaN(p) && !isNaN(op)) {
        const discountVal = Math.round(((op - p) / op) * 100);
        if (discountVal > 0) {
          setFormData((prev) => ({ ...prev, discount: `${discountVal}% off` }));
        } else {
          setFormData((prev) => ({ ...prev, discount: "" }));
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mocking submission or using the API URL
      console.log("Submitting course data:", formData);
      if (apiUrl) {
        const response = await axios.post(`${apiUrl}/courses`, formData);
        console.log("Response:", response.data);
        alert("Course added successfully!");
      } else {
        // Fallback for local testing without API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Course data logged to console (Mock)!");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Add New Course
          </h1>
          <p className="mt-2 text-slate-600">
            Fill in the details below to create a new learning program.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Title */}
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Course Title
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <AcademicCapIcon className="w-5 h-5" />
                  </span>
                  <input
                    required
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Advanced React Architecture"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Category
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <TagIcon className="w-5 h-5" />
                  </span>
                  <input
                    required
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Web Development"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Course Image URL
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <PhotoIcon className="w-5 h-5" />
                  </span>
                  <input
                    required
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Original Price */}
              <div>
                <label
                  htmlFor="originalPrice"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Original Price (NRs.)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <CurrencyRupeeIcon className="w-5 h-5" />
                  </span>
                  <input
                    required
                    type="number"
                    id="originalPrice"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    placeholder="e.g. 15000"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Sale Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Sale Price (NRs.)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <CurrencyRupeeIcon className="w-5 h-5" />
                  </span>
                  <input
                    required
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 1999"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Description
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-4 text-slate-400">
                    <DocumentTextIcon className="w-5 h-5" />
                  </span>
                  <textarea
                    required
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe what students will learn in this course..."
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Auto-calculated discount:
                </span>
                <span className="text-sm font-bold text-green-600">
                  {formData.discount || "0% off"}
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-teal-900 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  "Adding Course..."
                ) : (
                  <>
                    Add Course
                    <ChevronRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
