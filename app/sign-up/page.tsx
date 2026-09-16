"use client";

import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const RegisterPage = () => {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-4 py-2">
            <div className="w-full max-w-md bg-white py-7 rounded-2xl">

                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <Link
                        href="/"
                        className="inline-block text-3xl font-extrabold text-indigo-700"
                    >
                        Dev<span className="text-pink-500">Learn</span>
                    </Link>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900">
                        Create Your Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Start your learning journey with DevLearn.
                    </p>
                </div>

                {/* Register Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-8">

                    {/* Social Signup */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <FaGoogle className="text-red-500" />
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <FaGithub />
                            GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="h-px flex-1 bg-gray-200" />

                        <span className="text-xs text-gray-400">
                            OR SIGN UP WITH EMAIL
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2">
                            <input
                                id="terms"
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />

                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-600 leading-5"
                            >
                                I agree to the{" "}
                                <Link
                                    href="/terms"
                                    className="text-indigo-600 hover:text-pink-500 font-medium"
                                >
                                    Terms & Conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="text-indigo-600 hover:text-pink-500 font-medium"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition duration-200"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login */}
                    <p className="text-center text-sm text-gray-500 mt-7">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-indigo-600 hover:text-pink-500 transition"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Back Home */}
                <div className="text-center mt-6">
                    <Link
                        href="/#home"
                        className="text-sm text-gray-500 hover:text-indigo-600 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;