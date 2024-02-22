import './styles/DesktopButtonLink.css';

function DesktopButtonLink( {link, buttonLinkText, icon} ) {
    return(
        <button className='desktop-button'>
            <a href={link} target='blank'>
                {buttonLinkText}
            </a>
            <img src={icon} alt="icon" />
        </button>
    )
}
export default DesktopButtonLink;