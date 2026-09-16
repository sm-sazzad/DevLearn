"use client";

import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const LoginPage = () => {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-4 py-1">
            <div className="w-full max-w-md bg-white py-4 rounded-2xl">

                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <Link
                        href="/"
                        className="inline-block text-3xl font-extrabold text-indigo-700"
                    >
                        Dev<span className="text-pink-500">Learn</span>
                    </Link>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900">
                        Welcome Back!
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Login to continue your learning journey.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-8">

                    {/* Social Login */}
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
                            OR CONTINUE WITH
                        </span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

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
                            <div className="flex items-center justify-between mb-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-xs font-medium text-indigo-600 hover:text-pink-500 transition"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Remember */}
                        <div className="flex items-center gap-2">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />

                            <label
                                htmlFor="remember"
                                className="text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition duration-200"
                        >
                            Login
                        </button>
                    </form>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500 mt-7">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-indigo-600 hover:text-pink-500 transition"
                        >
                            Create an account
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

export default LoginPage;