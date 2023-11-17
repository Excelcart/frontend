import Image from "next/image";
import React from "react";
import Delivery from "../../public/delivery.svg";
import Seller from "../../public/seller.svg";

const Register = () => {
    return (
        <div>
            <div>
                <div>
                    <ul className="flex justify-between">
                        <li className="border border-[#00AB9B] rounded-full bg-white hover:bg-[#00AB9B] hover:text-white border-white p-2 text-xs">As Seller</li>
                        <li className="border border-[#00AB9B] rounded-full bg-white hover:bg-[#00AB9B] hover:text-white border-white p-2 text-xs">As Buyer</li>
                        <li className="border border-[#00AB9B] rounded-full bg-white hover:bg-[#00AB9B] hover:text-white border-white p-2 text-xs">Become Courier</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl font-bold">Create Account</h1>
                    <Image src={Seller} width={200} height={200} alt="Register as Courier" className="w-full py-10"/>
                </div>
                <form action="" method="post">
                    <div>                        
                        <label htmlFor="businessName" className="text-sm">Business Name:</label>
                        <div className="relative mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5M13.3335 5.83333C13.3335 7.67428 11.8411 9.16667 10.0002 9.16667C8.15921 9.16667 6.66683 7.67428 6.66683 5.83333C6.66683 3.99238 8.15921 2.5 10.0002 2.5C11.8411 2.5 13.3335 3.99238 13.3335 5.83333Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="text" id="businessName" name="business-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00AB9B] focus:border-[#00AB9B] block w-full ps-10 p-2.5" placeholder="Gilbert's Store"/>
                        </div>
                    </div>
                    <div>                        
                        <label htmlFor="email" className="text-sm">Email:</label>
                        <div className="relative mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3332 5.00001C18.3332 4.08334 17.5832 3.33334 16.6665 3.33334H3.33317C2.4165 3.33334 1.6665 4.08334 1.6665 5.00001M18.3332 5.00001V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V5.00001M18.3332 5.00001L9.99984 10.8333L1.6665 5.00001" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00AB9B] focus:border-[#00AB9B] block w-full ps-10 p-2.5" placeholder="Gilbert's Store"/>
                        </div>
                    </div>
                    <div>                        
                        <label htmlFor="campus" className="text-sm">Campus:</label>
                        <div className="relative mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3332 5.00001C18.3332 4.08334 17.5832 3.33334 16.6665 3.33334H3.33317C2.4165 3.33334 1.6665 4.08334 1.6665 5.00001M18.3332 5.00001V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V5.00001M18.3332 5.00001L9.99984 10.8333L1.6665 5.00001" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="text" id="campus" name="campus" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00AB9B] focus:border-[#00AB9B] block w-full ps-10 p-2.5" placeholder="Gilbert's Store"/>
                        </div>
                    </div>
                    <div>                        
                        <label htmlFor="phoneNumber" className="text-sm">Phone Number:</label>
                        <div className="relative mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3332 5.00001C18.3332 4.08334 17.5832 3.33334 16.6665 3.33334H3.33317C2.4165 3.33334 1.6665 4.08334 1.6665 5.00001M18.3332 5.00001V15C18.3332 15.9167 17.5832 16.6667 16.6665 16.6667H3.33317C2.4165 16.6667 1.6665 15.9167 1.6665 15V5.00001M18.3332 5.00001L9.99984 10.8333L1.6665 5.00001" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="text" id="phoneNumber" name="phone-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00AB9B] focus:border-[#00AB9B] block w-full ps-10 p-2.5" placeholder="Gilbert's Store"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Register