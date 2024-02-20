import './styles/DesktopButton.css';

function DesktopButton( {link, buttonLinkText, icon} ) {
    return(
        <button className='desktop-button'>
            <a href={link}>
                {buttonLinkText}
            </a>
            <img src={icon} alt="icon" />
        </button>
    )
}
export default DesktopButton;