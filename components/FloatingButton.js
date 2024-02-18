'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import {NUMERIC_CONTACT_PHONE} from "@/constants/common";
import {makeWhatsAppMeUrl} from "@/components/utils";

function FloatingButton() {
    const [show, setShow] = useState(false);

    const toggleButton = () => {
        setShow(window.scrollY > 500);
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleButton);

        return () => {
            window.removeEventListener('scroll', toggleButton);
        }
    })

    return (
        <a href={makeWhatsAppMeUrl(NUMERIC_CONTACT_PHONE)} target="_blank">
            <button
                className={`hidden sm:block fixed ${show ? 'bottom-14' : '-bottom-24'} transition-all duration-300 right-14 z-20 bg-brand-blue p-0.5 hover:brightness-125 rounded-tl-[30px] rounded-br-[30px]`}
            >
                <div className='p-6'>
                    <Image className="mx-auto" src='/phone.svg' alt="Call us" width={30} height={30}/>
                </div>
            </button>
        </a>
    )
}

export default FloatingButton;
