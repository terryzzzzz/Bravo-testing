import React from 'react'
import Logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-dark flex justify-center items-center z-40">
                <div className="container">
                    <div className="w-full flex flex-col px-10 sm:px-0 sm:flex-row sm:justify-between items-start sm:items-center py-5">
                        <div className="my-5 sm:my-0">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <button className="mb-4 sm:mb-0 mr-0 sm:mr-4">
                                <p className="text-gray-light text-sm">Privacy</p>
                            </button>
                            <button className="mb-4 sm:mb-0 mr-0 sm:mr-4">
                                <p className="text-gray-light text-sm">Terms and Conditions</p>
                            </button>
                            <button className="mb-4 sm:mb-0 mr-0 sm:mr-4">
                                <p className="text-gray-light text-sm">Frequently Asked Questions</p>
                            </button>
                            <button className="mb-4 sm:mb-0 mr-0 sm:mr-4">
                                <p className="text-gray-light text-sm">Contact us</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
