import Image from "next/image";
import {getScopedI18n} from "@/locales/server";

const brands = [
    {src: '/brands/unilumin.svg', name: 'Unilumin', key: 'unilumin'},
    {src: '/brands/lampro.svg', name: 'Lampro', key: 'lampro'},
    {src: '/brands/eurotruss.svg', name: 'Eurotruss', key: 'eurotruss'},
    {src: '/brands/novastar.svg', name: 'Novastar', key: 'novastar'},
    {src: '/brands/highend.svg', name: 'High End Systems', key: 'highend'},
    {src: '/brands/cyclops.svg', name: 'Cyclops', key: 'cyclops'},
    {src: '/brands/avolites.svg', name: 'Avolites', key: 'avolites'},
    {src: '/brands/das.svg', name: 'D.A.S.', key: 'das'},
    {src: '/brands/midas.svg', name: 'MIDAS', key: 'midas'},
    {src: '/brands/shure.svg', name: 'SHURE', key: 'shure'},
    {src: '/brands/mackie.svg', name: 'Mackie', key: 'mackie'},
    {src: '/brands/pioneer.svg', name: 'Pioneer', key: 'pioneer'},
    {src: '/brands/sennheiser.svg', name: 'Sennheiser', key: 'sennheiser'},
    {src: '/brands/laccoustics.svg', name: 'L`Acoustics', key: 'laccoustics'},
    {src: '/brands/robe.svg', name: 'ROBE', key: 'robe'},
    {src: '/brands/claypaky.svg', name: 'Claypaky', key: 'claypaky'},
]

async function OurBrands() {
    const scopedT = await getScopedI18n('brands')

    return (
        <section
            id='brands'
            className="relative min-h-full text-white pt-16 sm:pt-20 bg-fixed bg-center bg-cover bg-blend-overlay bg-dark overflow-hidden"
        >
            <div className='box-border w-full px-4 sm:px-0 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm'>
                <div className='relative font-pro-light z-[8]'>
                    <h2 className="text-[28px]/[auto] sm:text-[32px] uppercase text-center font-pro-medium">{scopedT('header')}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                        {brands.map(brand => (
                            <div className='flex items-center justify-center py-4 h-32' key={brand.key}>
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    width="0"
                                    height="0"
                                    className="w-auto h-auto"
                                />
                            </div>
                        ))}
                    </div>
                    <div className='w-full text-center text-base/[26px] uppercase mt-6 font-pro-medium'>
                        {scopedT('others')}
                    </div>
                </div>
                {/*<div className='absolute -bottom-12 left-0 right-0 w-full h-[500px] -skew-y-[3deg] z-[7] bg-gradient-to-t from-black from-70%' />*/}
            </div>
        </section>
    )
}

export default OurBrands;
