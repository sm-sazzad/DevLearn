import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "All Courses"
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>

            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;