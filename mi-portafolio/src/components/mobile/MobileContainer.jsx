function MobileContainer( {children, title} ) {
    return(
        <section className={'mobile-container'}>
            {title && <h3 className='mobile-container-title'>{title}</h3>}
            <div className='mobile-container-content'>
                {children}
            </div>
        </section>
    )
}

export default MobileContainer;