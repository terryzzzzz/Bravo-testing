import React, { useState } from 'react'
import MenuIcon from '../assets/menu_icon.svg'
import CloseIcon from '../assets/close_icon.svg'
import Logo from '../assets/logo.svg'

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button className={`${isOpen ? 'hidden' : 'block'} focus:outline:none`} onClick={handleClick}>
                <img src={MenuIcon} alt="" />
            </button>
            <div className={`fixed w-screen h-screen inset-0 bg-green-dark bg-opacity-90 transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="w-full flex justify-between items-center py-5 px-5 md:px-0">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <button className={`focus:outline:none`} onClick={handleClick}>
                        <img src={CloseIcon} alt="" />
                    </button>
                </div>
                <div className="absolute w-full h-full flex flex-col justify-center">
                    <button>
                        <p className="text-3xl text-green-bright font-bold">Program</p>
                    </button>
                    <button>
                        <p className="mt-10 text-3xl text-green-bright font-bold">Partners</p>
                    </button>
                    <button>
                        <p className="mt-10 text-3xl text-green-bright font-bold">Locations</p>
                    </button>
                    <button>
                        <p className="mt-10 text-3xl text-green-bright font-bold">About MXDC</p>
                    </button>
                    <button>
                        <p className="mt-10 text-3xl text-green-bright font-bold">Contact us</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
