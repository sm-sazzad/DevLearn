'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';


const Navbar = () => {

    const pathname = usePathname();
    const [active, setActive] = useState<"home" | "about" | "popular" | "">("")

    const link = <>
        <li><Link href='/#home' onClick={() => setActive("home")} className={`${pathname === '/all' || pathname === "/login" ? "" : active === "home" ? "text-indigo-500 font-semibold" : ""}`}>Home</Link></li>
        <li><Link onClick={() => setActive("popular")} className={`${pathname === '/all' ? "" : active === "popular" ? "text-indigo-500 font-semibold" : ""}`} href='/#popular'>Popular Course</Link></li>
        <li><Link href='/all' className={`${pathname === "/all" ? "text-indigo-500 font-semibold" : ''}`}>All Couses</Link></li>
        <li><Link onClick={() => setActive("about")} className={`${pathname === '/all' || pathname === "/login" ? "" : active === "about" ? "text-indigo-500 font-semibold" : ""}`} href='/#about'>About</Link></li>
    </>

    return (
        <nav className=' z-60 bg-black sticky top-0 '>
            <div className='w-[90%] mx-auto  flex justify-between items-center py-2 gap-2 bg-black'>
                <div>
                    <img src='./NavLogo.png' alt='DevLearn' className='h-15'></img>
                </div>
                <ul className='flex gap-6'>
                    {link}
                </ul>
                <ul className='flex gap-2'>
                    <Link href={'/login'}>
                        <button className='py-2 px-4 bg-stone-900 rounded-3xl cursor-pointer'>Sign in</button>
                    </Link>
                    <Link href={'/sign-up'}>
                        <button className='py-2 px-4 bg-stone-700 rounded-3xl cursor-pointer'>Sign Up</button>
                    </Link>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;