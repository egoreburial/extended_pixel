function BrandButton({ children, rounded = false }) {
    let roundedClass;
    let paddingClass

    if (rounded) {
        roundedClass = 'rounded-full'
        paddingClass = 'p-4'
    } else {
        roundedClass = 'rounded-tl-[30px] rounded-br-[30px]'
        paddingClass = 'py-4 px-6'
    }

    return (
        <button
            className={`bg-brand-blue font-pro-medium text-base/[26px] uppercase text-white transition-all hover:brightness-125 ${roundedClass}`}
        >
            <div className={paddingClass}>{children}</div>
        </button>
    )
}

export default BrandButton;
