import {getScopedI18n} from "@/locales/server";
import FilledFloater from "@/components/FileldFloater";

async function OurServices() {
    const scopedT = await getScopedI18n('ourServices')

    return (
        <section
            id='services'
            className="relative min-h-full bg-dark text-white sm:pt-20 sm:pb-20"
        >
            <div className='block sm:hidden'>
                <FilledFloater color="dark" />
            </div>
            <div className='box-border w-full px-4 pt-8 pb-16 sm:pt-0 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm'>
                <div className='relative font-pro-light z-10'>
                    <h2 className="text-[28px]/[auto] sm:text-[32px] uppercase text-center font-pro-medium">{scopedT('header')}</h2>
                    <p className='text-base/[26px] pt-12'>
                        {scopedT('text1')}
                    </p>
                    <p className='text-base/[26px] pt-12'>
                        {scopedT('text2')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurServices;
