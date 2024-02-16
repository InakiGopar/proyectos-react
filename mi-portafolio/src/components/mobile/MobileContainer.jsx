function MobileContainer( {children, title} ) {
    return(
        <section className={'mobile-container'}>
            {title && <h4 className='mobile-container-title'>{title}</h4>}
            <div className='mobile-container-content'>
                {children}
            </div>
        </section>
    )
}

export default MobileContainer;