import './styles/MobileContainer.css';

function MobileContainer( {children, title} ) {
    return(
        <section className={'mobile-container'}>
            {title && <h3 className='mobile-container-title'>{title}</h3>}
            <article className='mobile-container-content'>
                {children}
            </article>
        </section>
    )
}

export default MobileContainer;