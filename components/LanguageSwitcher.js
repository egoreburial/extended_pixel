'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client'

const locales = [{
    label: 'ENG',
    locale: 'en',
}, {
    label: 'RUS',
    locale: 'ru',
}]

function LanguageSwitcher() {
    const changeLocale = useChangeLocale()
    const locale = useCurrentLocale()

    const handleChangeLocale = (val) => () => changeLocale(val)

    return (
        <>
            <div className='hidden sm:flex  gap-4 py-[8px] sm:px-[11px]'>
                {locales.map((lang) => (
                    <div
                        key={lang.locale}
                        className={`text-white font-pro-light ${lang.locale === locale ? 'opacity-100 underline': 'opacity-80 '} hover:opacity-95 hover:cursor-pointer`}
                        onClick={handleChangeLocale(lang.locale)}
                    >
                        {lang.label}
                    </div>
                ))}
            </div>
            <div className='flex sm:hidden gap-13
             py-[8px] sm:px-[11px]'>
                {locales.map((lang) => (
                    <div
                        key={lang.locale}
                        className={`py-1 px-2 text-white font-pro-medium ${lang.locale === locale ? 'bg-brand-blue': ''} hover:opacity-95 hover:cursor-pointer rounded-tl-[15px] rounded-br-[15px]`}
                        onClick={handleChangeLocale(lang.locale)}
                    >
                        {lang.label}
                    </div>
                ))}
            </div>
        </>
    )
}

export default LanguageSwitcher;
