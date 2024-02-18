import Image from "next/image";
import BrandButton from "@/components/BrandButton";

function SliderNextButton() {
    return (
        <div className='flex absolute top-0 bottom-0 -right-20 z-10'>
            <div className='swiper-button-next my-auto'>
                <BrandButton rounded>
                    <Image className='mx-1' src='/arrow_right.svg' alt="right" width={8} height={16} />
                </BrandButton>
            </div>
        </div>
    )
}

export default SliderNextButton;
