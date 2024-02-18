import Image from "next/image";
import BrandButton from "@/components/BrandButton";

function SliderPrevButton() {
    return (
        <div className='flex absolute top-0 bottom-0 -left-20 z-10'>
            <div className='swiper-button-prev my-auto'>
                <BrandButton rounded>
                    <Image className='mx-1' src='/arrow_left.svg' alt="left" width={8} height={16} />
                </BrandButton>
            </div>
        </div>
    )
}

export default SliderPrevButton;
