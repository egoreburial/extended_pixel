import ContactForm from "@/components/Contact/ContactForm";
import {getScopedI18n} from "@/locales/server";

async function Contact() {
    const scopedT = await getScopedI18n('contactUs')
    const descriptionScopedT = await getScopedI18n('contactUs.description')

    return (
        <section
            id='contacts'
            className="relative min-h-full bg-dark text-white pt-20 pb-12"
        >
            <div className='box-border w-full px-4 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm'>
                <div className='relative font-pro-light z-10'>
                    <h2 className="text-[28px]/[auto] sm:text-[32px] uppercase text-center font-pro-medium">{scopedT('header')}</h2>
                    <div className='flex flex-col sm:flex-row h-full w-full justify-between pt-4 sm:pt-20 items-center'>
                        <div className='basis-1/2'>
                            <div className='w-[85%] sm:w-[65%] text-center sm:text-left mx-auto sm:mx-0'>
                                <h5 className='text-base/[26px] my-4'>{descriptionScopedT('text1')}</h5>
                                <h3 className='text-3xl font-pro-medium my-4 text-brand-blue'>{descriptionScopedT('text2')}</h3>
                                <p className='text-base/[26px] my-4'>{descriptionScopedT('text3')}</p>
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                {/*<div className='absolute top-0 bottom-0 left-0 right-0 w-full h-[101%] -skew-y-[3deg] z-[9] bg-black' />*/}
            </div>
        </section>
    )
}

export default Contact;
