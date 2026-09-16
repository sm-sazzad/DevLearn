// 'use client'
import React, { use } from 'react';
import { IDataType } from './DataType';
import Card from './Card';
import Link from 'next/link';

const dataFetch = async (): Promise<IDataType[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}
const PromiseData = dataFetch();

const PupularCard = () => {

    const Courses = use(PromiseData)
    const populer = Courses.filter(n => n.rating >= 4.9);

    return (
        <div id='popular' className='my-10 w-[90%] mx-auto scroll-my-20'>
            <h1 className='font-extrabold text-5xl text-center my-10'>Popular Courses</h1>
            <div className='grid grid-cols-3 gap-7'>
                {
                    populer.slice(0, 6).map(course => <Card key={course.id} course={course} />)
                }
            </div>
            <div className=' flex justify-center'>
                <Link href={'/all'}>
                    <button className="px-6 py-3 my-9 rounded-xl cursor-pointer bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition">
                        View All Courses
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PupularCard;