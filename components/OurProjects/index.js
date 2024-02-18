import Image from "next/image";
import SliderXL from "@/components/OurProjects/SliderXL";
import SliderSM from "@/components/OurProjects/SliderSM";
import {getScopedI18n} from "@/locales/server";
import FilledFloater from "@/components/FileldFloater";

const slides = [
    {
        imgSrc: '/projects/1.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project1'
    },
    {
        imgSrc: '/projects/2.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project2'
    },
    {
        imgSrc: '/projects/3.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project3'
    },
    {
        imgSrc: '/projects/4.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project4'
    },
    {
        imgSrc: '/projects/5.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project5'
    },
    {
        imgSrc: '/projects/6.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project6'
    },
    {
        imgSrc: '/projects/7.jpg',
        label: 'Instalogia @ Dubai Opera',
        key: 'project7'
    },
]

async function OurProjects() {
    const scopedT = await getScopedI18n('ourProjects')
    return (
        <section
            id='projects'
            className="relative min-h-full text-white bg-fixed bg-center bg-cover bg-blend-overlay bg-brand-dark-blue"
        >
            <FilledFloater color='blue' />
            <div className='box-border w-full px-4 sm:px-0 pt-8 sm:pt-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm'>
                <div className='relative font-pro-light'>
                    <h2 className="text-[28px]/[auto] sm:text-[32px] uppercase text-center font-pro-medium">{scopedT('header')}</h2>
                    <Image
                        className='mx-auto my-8'
                        priority
                        src="/logo_dubai.svg"
                        height={109}
                        width={86}
                        alt='Dubai'
                    />
                    <div className='hidden sm:block'>
                        <SliderXL slides={slides} />
                    </div>
                    <div className='block sm:hidden'>
                        <SliderSM slides={slides} />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 h-1/3 sm:h-96 w-full bg-dark'>
                <FilledFloater color='dark' />
            </div>
        </section>
    )
}

export default OurProjects;
