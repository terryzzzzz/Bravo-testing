import React from 'react'
import Logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-dark flex justify-center items-center z-40">
                <div className="container">
                    <div className="w-full flex justify-between items-center py-5">
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div className="flex items-center">
                            <button className="mr-4">
                                <p className="text-gray-light text-sm">Privacy</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-gray-light text-sm">Terms and Conditions</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-gray-light text-sm">Frequently Asked Questions</p>
                            </button>
                            <button className="mr-4">
                                <p className="text-gray-light text-sm">Contact us</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
