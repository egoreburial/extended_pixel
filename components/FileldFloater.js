function FilledFloater({ color }) {
    let wrapperColor = ''

    const primaryColor = color === 'blue' ? 'bg-dark' : 'bg-brand-dark-blue'
    const secondaryColor = color === 'blue' ? 'bg-brand-dark-blue' : 'bg-dark'

    return (
        <div className='h-8 sm:h-28 w-full relative'>
            <div className={`absolute -top-8 sm:-top-28 w-full h-full ${secondaryColor}`}>
                <div className={`w-full h-full ${primaryColor} rounded-br-full`}></div>
            </div>
            <div className={`w-full h-full ${primaryColor}`}>
                <div className={`w-full h-full ${secondaryColor} rounded-tl-full`}></div>
            </div>
        </div>
    );
}

export default FilledFloater;
