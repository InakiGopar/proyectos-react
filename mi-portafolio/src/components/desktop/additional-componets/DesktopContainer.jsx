import './styles/DesktopContainer.css';

function DesktopContainer({children, title}) {
    return(
        <section className="desktop-container">
            {title && <h4 className='desktop-container-title'>{title}</h4>}
            <article>
                {children}
            </article>
        </section>
    )
}

export default DesktopContainer;