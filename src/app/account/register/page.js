"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateAccountForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dob: "",
    newsletter: false,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submit logic here
    console.log(form);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex justify-between mb-8 space-x-10 text-xl font-semibold">
        <Link
          href="/account/login"
          className="text-gray-400 hover:text-black transition"
        >
          Sign in
        </Link>
        <span className="text-black underline underline-offset-4">
          Create an account
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">E-mail *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-black px-4 py-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password *</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border border-black px-4 py-2"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium">Confirm password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border border-black px-4 py-2"
          />
        </div>

        {/* First + Last Name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">First name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border border-black px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Last name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border border-black px-4 py-2"
            />
          </div>
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-1 font-medium">Date of birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border border-black px-4 py-2"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              Sign up to receive the latest Venum news and offers by e-mail
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <span>
              By registering, you agree to Venum’s{" "}
              <a className="underline">Privacy Policy</a> and{" "}
              <a className="underline">Terms and Conditions</a>.*
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-6">
          <button
            type="submit"
            className="relative group overflow-hidden border border-black skew-x-[-12deg] w-[180px] text-center"
          >
            <span className="absolute inset-0 w-0 bg-black group-hover:w-full transition-all duration-300 ease-out z-0"></span>
            <span className="relative block py-3 text-black group-hover:text-white skew-x-[12deg] z-10 font-semibold">
              Create my account
            </span>
          </button>

          <button
            type="button"
            className="relative group overflow-hidden border border-black skew-x-[-12deg] w-[120px] text-center"
          >
            <span className="absolute inset-0 w-0 bg-black group-hover:w-full transition-all duration-300 ease-out z-0"></span>
            <span className="relative block py-3 text-black group-hover:text-white skew-x-[12deg] z-10 font-semibold">
              Cancel
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
