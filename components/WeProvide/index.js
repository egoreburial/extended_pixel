import WeProvideCard from "@/components/WeProvide/Card";
import {getScopedI18n} from "@/locales/server";
import Floater from "@/components/Floater";
import FilledFloater from "@/components/FileldFloater";

const cards = [
    {src: '/weProvide/6.png', label: 'Led Screens', key: 'ledScreens'},
    {src: '/weProvide/1.png', label: 'Sound Equipment', key: 'soundEquipment'},
    {src: '/weProvide/3.png', label: 'Lighting Equipment', key: 'lightingEquipment'},
    {src: '/weProvide/4.png', label: 'Stage & Trussing', key: 'stageTrussing'},
]

async function WeProvide() {
    const scopedT = await getScopedI18n('weProvide')

    return (
        <section id='provide' className="relative min-h-full text-white pt-8 sm:pt-20 font-pro-medium">
            <div className='absolute top-0 h-8 sm:h-28 w-full'>
                <Floater color="blue" fillLeftSide={false} />
            </div>
            <div className='bg-brand-dark-blue pt-8 pb-8 sm:pb-0'>
                <div className='box-border w-full px-4 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm'>
                    <div className='relative z-10'>
                        <h2 className="text-[28px]/[auto] sm:text-[32px] uppercase text-center">{scopedT('header')}</h2>
                        <div className="flex flex-row my-12 overflow-y-auto gap-6 items-stretch scrollbar-hide sm:flex-wrap">
                            {cards.map(card => (
                                <WeProvideCard src={card.src} label={scopedT(card.key)} key={card.key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden sm:block absolute bottom-0 sm:h-36 w-full bg-dark'>
                <FilledFloater color="dark" />
            </div>
        </section>
    )
}

export default WeProvide;
