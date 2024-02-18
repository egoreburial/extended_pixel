'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative, Navigation} from "swiper/modules";
import SliderPrevButton from "@/components/OurProjects/SliderPrevButton";
import SliderNextButton from "@/components/OurProjects/SliderNextButton";

import 'swiper/css';
import 'swiper/css/effect-creative';
import Image from "next/image";

function SliderXL({ slides }) {
    return (
        <div className='relative'>
            <Swiper
                slidesPerView='auto'
                modules={[EffectCreative, Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                effect="creative"
                creativeEffect={{
                    shadowPerProgress: true,
                    prev: {
                        shadow: true,
                        translate: ['-21%',0,-130],
                    },
                    next: {
                        shadow: true,
                        translate: ['21%',0,-130],
                    },
                }}
                className='my-12 mx-auto'
                centeredSlides
                loop
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={slide.key}
                        className='!w-fit rounded-[30px]'
                    >
                        {({ isActive }) => {
                            return (
                                <div>
                                    <div
                                        className='w-[343px] h-[257px] xl:w-[800px] lg:w-[650px] md:w-[500px] sm:w-[400px] sm:h-[600px] bg-center bg-cover border border-[#808080] relative rounded-[30px] rounded-bl-none overflow-hidden'
                                    >
                                        <Image
                                            src={slide.imgSrc}
                                            alt={slide.label}
                                            fill
                                            sizes="(min-width: 1280px) 800px, (min-width: 1024px) 650px, (min-width: 640px) 400px, 343px"
                                            className="object-cover"
                                        />
                                    </div>
                                    {isActive && (
                                        <div className='flex justify-between items-center'>
                                            <div
                                                className="font-pro-medium text-white rounded-br-[30px] h-auto min-w-[50%] w-fit bg-brand-blue">
                                                <div className='uppercase text-base/[26px] px-6 py-3 h-full'>
                                                    {slide.label}
                                                </div>
                                            </div>
                                            <div>{index + 1}/{slides.length}</div>
                                        </div>
                                    )}
                                </div>
                            )
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='hidden sm:block'>
                <SliderPrevButton />
                <SliderNextButton />
            </div>
        </div>
    )
}

export default SliderXL;
