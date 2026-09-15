import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div id="home" className='scroll-my-22'>
            <div className='relative w-[90%] mx-auto'>
                <img src="/Hero.jpg" alt="hero" className=' h-[85vh] w-full rounded-2xl mt-3 object-cover' />
                <span className='absolute top-5 left-6 py-0.5 px-3  rounded-full'>Learn. Build. Become a Developer.</span>
                <div className='absolute top-1/2 -translate-y-1/2 left-17 space-y-6'>
                    <h1 className='text-6xl font-extrabold'>DevLearn</h1>
                    <p className='text-xl font-medium w-[90%] text-stone-400'>Practical courses to help you build real-world development skills.</p>
                    <button className='py-2 px-4 bg-indigo-700 rounded-2xl cursor-pointer'>Explore Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;