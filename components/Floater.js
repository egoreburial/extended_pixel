function Floater({ color , id = '', children, fillLeftSide = true}) {
    let wrapperColor = ''

    if (fillLeftSide) {
        wrapperColor = color === 'blue' ? 'bg-dark' : 'bg-brand-dark-blue'
    }

    const baseCx = `h-28 w-full ${wrapperColor} relative after:content-[''] after:absolute after:right-0 after:-top-56 after:w-28 after:h-56 after:rounded-br-full`
    const smCx = `sm:h-28 sm:after:-top-56 sm:after:w-28 sm:after:h-56 sm:after:shadow-[0_112px_0_0] ${ color === 'blue' ? 'sm:after:shadow-brand-dark-blue' : 'sm:after:shadow-dark'}`
    const mobileCx = `h-8 after:-top-16 after:w-8 after:h-16 after:shadow-[0_32px_0_0] ${ color === 'blue' ? 'after:shadow-brand-dark-blue' : 'after:shadow-dark'}`

    return (
        <div
            id={id}
            className={`${mobileCx} ${smCx} ${baseCx}`}
        >
            <div className={`h-full w-full rounded-tl-full ${color === 'blue' ? 'bg-brand-dark-blue' : 'bg-dark'}`}>
                {children}
            </div>

        </div>
    );
}

export default Floater;
