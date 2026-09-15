import React from 'react';
import { DataFatch } from '../data';

const page = async ({ params }: { params: Promise<{ course: string }> }) => {

    const { course } = await params;

    const courses = await DataFatch();

    const post = courses.find(n => n.id === course);

    return (
        <div className='w-[90%] mx-auto flex justify-center items-center mt-10'>
            {post && (
                <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900 shadow-2xl">

                    {/* Top Section */}
                    <div className="relative bg-linear-to-br from-indigo-500/10 via-slate-900 to-cyan-500/10 p-6 sm:p-8">

                        {/* Badge */}
                        <div className="absolute right-6 top-6">
                            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
                                {post.badge}
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-lg">
                            <img
                                src={post.icon}
                                alt={post.name}
                                className="h-14 w-14 object-contain"
                            />
                        </div>

                        {/* Course Name */}
                        <h2 className="mt-6 text-3xl font-bold text-white">
                            {post.name}
                        </h2>

                        <p className="mt-2 text-slate-400">
                            {post.category}
                        </p>

                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">

                        {/* Description */}
                        <div>
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                                About This Course
                            </h3>

                            <p className="leading-7 text-slate-400">
                                {post.description}
                            </p>
                        </div>

                        {/* Course Info */}
                        <div className="mt-7 grid grid-cols-3 gap-3">

                            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4 text-center">
                                <p className="text-xs text-slate-500">
                                    Category
                                </p>
                                <p className="mt-2 font-semibold text-white">
                                    {post.category}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4 text-center">
                                <p className="text-xs text-slate-500">
                                    Difficulty
                                </p>
                                <p className="mt-2 font-semibold text-white">
                                    {post.difficulty}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4 text-center">
                                <p className="text-xs text-slate-500">
                                    Rating
                                </p>
                                <p className="mt-2 font-semibold text-yellow-400">
                                    ⭐ {post.rating}
                                </p>
                            </div>

                        </div>

                        {/* Bottom */}
                        <div className="mt-7 flex items-center justify-between rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-5 py-4">

                            <div>
                                <p className="text-xs text-slate-500">
                                    Start your learning journey
                                </p>
                                <p className="mt-1 font-semibold text-white">
                                    Learn. Build. Grow.
                                </p>
                            </div>

                            <button className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500">
                                Start Learning →
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default page;