'use client'

import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import en from "@/locales/en";
import {I18nProviderClient, useScopedI18n} from "@/locales/client";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function Dropdown() {
    const scopedT = useScopedI18n('navigation')

    const [isOpen, toggleOpen] = useState(false);
    const refMenu = useRef(null)

    const handleToggle = () => {
        toggleOpen(!isOpen);
    }

    const closeOpen = (e) => {
        if (refMenu.current && isOpen && !refMenu.current.contains(e.target)) {
            toggleOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', closeOpen);
        window.addEventListener('scroll', closeOpen);

        return () => {
            window.removeEventListener('mousedown', closeOpen);
            window.addEventListener('scroll', closeOpen);
        }
    })

    let navItems = <>
        <a className="hover:text-brand-blue transition-colors z-10 text-left block py-4" href="#provide">{scopedT('weProvide')}</a>
        <a className="hover:text-brand-blue transition-colors z-10 text-left block py-4" href="#services">{scopedT('ourServices')}</a>
        <a className="hover:text-brand-blue transition-colors z-10 text-left block py-4" href="#projects">{scopedT('ourProjects')}</a>
        <a className="hover:text-brand-blue transition-colors z-10 text-left block py-4" href="#brands">{scopedT('brands')}</a>
        <a className="hover:text-brand-blue transition-colors z-10 text-left block py-4" href="#contacts">{scopedT('contactUs')}</a>
    </>

    return (
        <div ref={refMenu} className="z-0 relative block text-left w-fit">
            <button className="py-[14px] px-[11px]" onClick={handleToggle}>
                <Image className="hover:opacity-80 transition-opacity ease-linear" src={"/hamburger.svg"} alt="nav-hamburger" width={18} height={12}/>
            </button>
            <div onClick={handleToggle} className={`hidden sm:block box-border absolute w-72 mt-3 px-6 text-base text-white uppercase bg-brand-grey font-pro-medium shadow inset-x-0 z-10 ${isOpen ? 'max-h-[400px]' : 'max-h-0'} overflow-hidden transition-all ease-in-out duration-300 rounded-2xl`}>
                {navItems}
            </div>
            <div onClick={handleToggle} className={`block sm:hidden absolute w-72 h-screen px-5 py-4 top-12 -left-4 text-base text-white uppercase bg-brand-grey font-pro-medium shadow inset-x-0 z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}>
                <LanguageSwitcher />
                {navItems}
            </div>
        </div>
    )
}

function I18nDropdown() {
    return (
        <I18nProviderClient fallbackLocale={en}>
            <Dropdown />
        </I18nProviderClient>
    )
}

export default I18nDropdown;
