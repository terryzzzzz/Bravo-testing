import React from 'react'
import Logo from '../assets/logo.svg'
import HeroImage from '../components/HeroImage'
import MobileMenu from './MobileMenu'

export default function Header() {
    return (
        <div className="w-full h-auto lg:h-screen">
            <div className="w-full fixed bg-green-dark flex justify-center items-center top-0 z-40">
                <div className="container">
                    <div className="w-full flex justify-between items-center py-5 px-5 md:px-0">
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div className="hidden sm:flex items-center">
                            <button className="mr-4">
                                <p className="text-green-light text-sm">Program</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-green-light text-sm">Partners</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-green-light text-sm">Locations</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-green-light text-sm">About MXDC</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-green-light text-sm">Contact us</p>
                            </button>
                        </div>
                        <div className="block sm:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto lg:h-full relative bg-green-light">
                <HeroImage className="absolute w-full h-full object-cover" />
                <div className="relative w-full h-64 py-64 lg:py-0 lg:h-full flex flex-col justify-center items-center z-10">
                    <h1 className="text-white text-4xl lg:text-7xl font-bold">MXDC Melbourne</h1>
                    <p className="lg:mt-10 text-white text-3xl font-semibold">June 20 - 27</p>
                </div>
            </div>
        </div>
    )
}
