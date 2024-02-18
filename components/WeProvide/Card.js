import Image from "next/image";

function WeProvideCard({ src, label}) {
    return (
        <div className="flex-shrink-0 sm:basis-1/2-gap-6 flex flex-col justify-between">
            <div className="h-[235px] w-80 sm:w-full overflow-hidden rounded-[30px] rounded-bl-none">
                <Image
                    className='h-full max-w-none sm:w-full object-cover'
                    src={src}
                    alt={label}
                    width={500}
                    height={235}
                />
            </div>
            <div className="font-pro-medium text-white rounded-br-[30px] h-auto min-w-[50%] w-fit bg-brand-blue">
                <div className='uppercase text-base/[26px] px-6 py-3 h-full'>
                    {label}
                </div>
            </div>
        </div>
    )
}

export default WeProvideCard;
