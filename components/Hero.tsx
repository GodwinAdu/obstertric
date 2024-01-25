// src/components/HeroSection.js
import React from 'react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { User } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Obstertric and Gynaecology Directorate</h1>
                <p className="text-lg">This directive exclusively applies to personnel within the O & G Directorate. </p>
                <p className="text-sm mt-2">It is intended solely for the staff members associated with this specific department.</p>
                <SignedOut>
                <Link href="/sign-in" className={cn(buttonVariants(), "mt-4")}>
                    Sign In
                </Link>
                </SignedOut>
                <SignedIn>
                <Link href="/profile" className={cn(buttonVariants(), "mt-4")}>
                    Profile <User className="w-4 h-4 ml-2" />
                </Link>
                </SignedIn>
            </div>
        </div>
    );
};

export default HeroSection;
