
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* tag semantica */}
            <nav className="bg-custom-gray p-4 z-1">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="border-2 border-custom-green text-custom-green p-2">Logo</div>
                    <div className="hidden md:flex space-x-10">
                        <a href="#" className="text-custom-text01">Home</a>
                        <a href="#" className="text-custom-text01">About</a>
                        <a href="#" className="text-custom-text01">Contact</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-custom-green text-custom-text01 px-4 py-2 rounded">Login</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-custom-green">
                            {isOpen ? <XMarkIcon className="h-6 w-6"/>: <Bars3Icon className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Hero