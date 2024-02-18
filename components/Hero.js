import { getScopedI18n } from '@/locales/server'

import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BrandButton from "@/components/BrandButton";
import { NUMERIC_CONTACT_PHONE} from "@/constants/common";
import {makeWhatsAppMeUrl} from "@/components/utils";

async function Hero() {
    const scopedT = await getScopedI18n('hero')

    return (
        <section
            id='hero'
            className="flex flex-col min-h-screen sm:min-h-full text-white bg-fixed bg-center bg-cover relative"
        >
            <div className="absolute w-screen h-[calc(100%+32px)] sm:h-[calc(100%+112px)] z-[-1] inset-0">
                <Image
                    alt="Hero"
                    src="/background/hero.jpg"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="flex flex-1 box-border w-full px-4 pb-14 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm">
                <div className="w-full mt-16 mb-14 text-center">
                    <div className='flex items-start justify-between font-pro-medium text-base/[26px] text-white'>
                        <div className='hidden sm:block w-28 text-right'>
                            <Dropdown />
                        </div>
                        <Image className="mx-auto" src={"/logo_white.svg"} alt="logo" width={150} height={153}/>
                        <div className='hidden sm:block w-28 text-left'>
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div className='mx-auto w-3/5 sm:w-3/5'>
                        {/*<h1 className="text-[28px]/[56px] sm:text-4xl mt-[72px] sm:mt-16 font-pro-black uppercase">Event Production & Full Technical Support in Dubai</h1>*/}
                        <h1 className="text-[28px]/[56px] sm:text-4xl mt-24 font-pro-black uppercase">{scopedT('title')}</h1>
                    </div>
                    {/*<p className="mt-14 text-base/[26px] font-pro-medium uppercase">{scopedT('callUsNow')}</p>*/}
                    <div className='mt-20'>
                        <a href={makeWhatsAppMeUrl(NUMERIC_CONTACT_PHONE)} target="_blank">
                            <BrandButton>{scopedT('callUsNow')}</BrandButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
