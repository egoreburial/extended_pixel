'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {Navigation} from "swiper/modules";
import Image from "next/image";
import React, {useState} from "react";
import BrandButton from "@/components/BrandButton";

function SliderSM({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-sm-button-next",
                    prevEl: ".swiper-sm-button-prev",
                }}
                onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                loop
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.key}>
                        <div>
                            <div
                                className='w-full h-[257px] bg-center bg-cover border border-[#808080] relative rounded-[30px] rounded-bl-none overflow-hidden'
                            >
                                <Image
                                    src={slide.imgSrc}
                                    alt={slide.label}
                                    fill
                                    sizes="(min-width: 1280px) 800px, (min-width: 1024px) 650px, (min-width: 640px) 400px, 343px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="font-pro-medium text-white rounded-br-[30px] h-auto min-w-[50%] w-fit bg-brand-blue">
                                <div className='uppercase text-base/[26px] px-6 py-3 h-full'>
                                    {slide.label}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex items-center justify-between pt-2 relative z-10'>
                <div className='swiper-sm-button-prev my-auto'>
                    <BrandButton rounded>
                        <Image className='mx-1' src='/arrow_left.svg' alt="left" width={8} height={16} />
                    </BrandButton>
                </div>
                <div className='font-pro-light text-base/[26px]'>
                    {activeIndex + 1} / {slides.length}
                </div>
                <div className='swiper-sm-button-next my-auto'>
                    <BrandButton rounded>
                        <Image className='mx-1' src='/arrow_right.svg' alt="right" width={8} height={16} />
                    </BrandButton>
                </div>
            </div>
        </div>
    )
}

export default SliderSM;
