import React from 'react';
import { DataFatch } from './data';
import Card from '../Components/Card';


const Courses = async () => {

    const courses = await DataFatch();
    return (
        <div className='w-[90%] mx-auto scroll-my-20'>
            <h1 className='font-extrabold text-5xl text-center my-10'>All Courses</h1>
            <div className='grid grid-cols-4 gap-4 my-10'>
                {
                    courses.map(course => <Card course={course} key={course.id} />)
                }
            </div>
        </div>
    );
};

export default Courses;