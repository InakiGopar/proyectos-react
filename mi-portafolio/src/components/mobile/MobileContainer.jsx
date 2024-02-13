function MobileContainer( {children, title} ) {
    return(
        <section className={'mobile-container'}>
            {title && <h2 className='mobile-container-title'>{title}</h2>}
            <div className='mobile-container-content'>
                {children}
            </div>
        </section>
    )
}

export default MobileContainer;