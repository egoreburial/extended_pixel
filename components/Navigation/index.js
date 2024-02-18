'use client';

import React, {useEffect, useState} from "react";
import './styles.css'
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {NUMERIC_CONTACT_PHONE} from "@/constants/common";
import {makeWhatsAppMeUrl} from "@/components/utils";

function Navigation() {
    const [show, setShow] = useState(false);

    const toggleNavBar = () => {
        setShow(window.scrollY > 500);
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleNavBar);

        return () => {
            window.removeEventListener('scroll', toggleNavBar);
        }
    })

    return (
        <nav className={`navbar ${show ? 'navbar--show' : ''}`}>
            <div className='relative bg-brand-dark-blue h-full'>
                <div className='flex items-center h-full justify-between box-border w-full py-2 px-4 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm font-pro-medium text-base/[26px] text-white'>
                    <div className='w-28 text-left'>
                        <Dropdown />
                    </div>
                    <div>
                        <Image className="hover:opacity-80 transition-opacity ease-linear" src={"/logo_small.svg"} alt="logo_small" width={40} height={40}/>
                    </div>
                    <div className='w-28 text-right'>
                        <div className='hidden sm:block'>
                            <LanguageSwitcher />
                        </div>
                        <div className='block sm:hidden'>
                            <a href={makeWhatsAppMeUrl(NUMERIC_CONTACT_PHONE)} target="_blank">
                                <button className='p-[14px] ml-auto'>
                                    <Image src='/phone.svg' alt="Call us" width={18} height={18}/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
