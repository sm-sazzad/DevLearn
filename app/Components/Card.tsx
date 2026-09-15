import React from 'react';
import { IDataType } from './DataType';
import Link from 'next/link';

interface CardProps {
    course: IDataType
}

const Card = ({ course }: CardProps) => {
    return (
        <div>
            <div className="flex flex-col h-full bg-slate-900 border border-slate-700/70 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex justify-between items-center">
                    <div className="p-3 bg-slate-800 border border-slate-700 rounded-xl">
                        <img src={course.icon} alt="" className="h-9 w-9" />
                    </div>

                    <span className="py-1 px-4 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-medium rounded-2xl">
                        {course.badge}
                    </span>
                </div>

                <h1 className="font-bold py-3 text-2xl text-white">
                    {course.name}
                </h1>

                <p className="text-slate-400 text-[17px] py-2 grow ">
                    {course.description}
                </p>

                <div className="mt-auto">

                    <div className="border-t border-slate-700/70 my-4"></div>

                    <div className="flex justify-between items-center font-semibold text-slate-400">

                        <span className="py-1.5 px-2 bg-slate-800 border border-slate-700 rounded-md">
                            {course.category}
                        </span>

                        <p>{course.difficulty}</p>

                        <p className="flex items-center gap-1">
                            ⭐ {course.rating}
                        </p>

                    </div>

                    <Link href={`/all/${course.id}`}>
                        <button className="mt-5 w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors cursor-pointer">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Card;