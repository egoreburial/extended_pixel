import Image from "next/image";
import {
    CONTACT_EMAIL,
    CONTACT_PHONE,
    NUMERIC_CONTACT_PHONE,
    NUMERIC_SECONDARY_CONTACT_PHONE,
    SECONDARY_CONTACT_PHONE
} from "@/constants/common";
import {getScopedI18n} from "@/locales/server";
import Floater from "@/components/Floater";

async function Footer() {
    const scopedT = await getScopedI18n('footer')

    return (
        <section id='contacts' className="min-h-full bg-brand-dark-blue text-white pt-10 relative">
            <div className='absolute top-0 h-28 w-full'>
                <Floater color='blue' />
            </div>
            <div className='box-border w-full px-4 pb-8 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm font-pro-light relative z-10'>
                <div className='flex flex-col gap-8 sm:flex-row justify-between sm:items-center'>
                    <div>
                        <Image src='/logo_full_white.svg' alt="logo_full" width={243} height={64}/>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-sm/[22px] pr-4'>{scopedT('ourMail')}:</div>
                        <div className='text-sm font-pro-medium'>{CONTACT_EMAIL}</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-sm/[22px] pr-4'>{scopedT('callUs')}:</div>
                        <div className='text-[0.9rem] sm:text-xl font-pro-medium'>
                            <a href={`tel:+${NUMERIC_CONTACT_PHONE}`}>
                                {CONTACT_PHONE}
                            </a>
                        </div>
                        <div className='text-xl font-pro-medium pr-1.5'>{", "}</div>
                        <div className='text-[0.9rem] sm:text-xl font-pro-medium'>
                            <a href={`tel:+${NUMERIC_SECONDARY_CONTACT_PHONE}`}>
                                {SECONDARY_CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse gap-8 pt-8 sm:flex-row justify-between sm:items-center'>
                    <div>
                        <span className='text-sm'>
                            © 2023 Extended Pixel, LLC. {scopedT('allRightsReserved')}
                        </span>
                    </div>
                    {/*<div className="flex flex-row gap-4">*/}
                    {/*    <a href='#'>*/}
                    {/*        <Image className="mx-auto" src='/socials/fb.svg' alt="Facebook" width={32} height={32}/>*/}
                    {/*    </a>*/}
                    {/*    <a href='#'>*/}
                    {/*        <Image className="mx-auto" src='/socials/twitter.svg' alt="Twitter" width={32} height={32}/>*/}
                    {/*    </a>*/}
                    {/*    <a href='#'>*/}
                    {/*        <Image className="mx-auto" src='/socials/telegram.svg' alt="Telegram" width={32} height={32}/>*/}
                    {/*    </a>*/}
                    {/*    <a href='#'>*/}
                    {/*        <Image className="mx-auto" src='/socials/vk.svg' alt="VKontakte" width={32} height={32}/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>

            </div>
        </section>
    )
}

export default Footer;
