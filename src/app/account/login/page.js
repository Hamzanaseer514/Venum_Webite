"use client";
import React, { useState } from "react";
import Link from "next/link";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="py-12 bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between mb-10">
          <h2 className="text-xl font-bold text-black underline underline-offset-4">
            Login
          </h2>
          <Link href="/account/register">
            <h2 className="text-xl text-gray-400">Create an account</h2>
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border-b border-black focus:outline-none py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border-b border-black focus:outline-none py-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Sign in button */}
          <div className="text-right">
            <button
              type="submit"
              className="relative group overflow-hidden border border-black transform skew-x-[-12deg] w-[110px] text-center"
            >
              <span className="absolute inset-0 w-0 bg-black transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              <span className="relative block py-2 px-4 text-black group-hover:text-white transform skew-x-[12deg] transition-colors duration-300 text-sm font-bold z-10">
                Sign in
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
