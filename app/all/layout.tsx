import { Metadata } from 'next';
import React from 'react';
import Navbar from '../Components/Navbar';

export const metadata: Metadata = {
    title: "All Courses"
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />

            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;