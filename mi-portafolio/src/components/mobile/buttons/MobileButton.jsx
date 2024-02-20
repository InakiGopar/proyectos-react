import './styles/MobileButton.css';

function MobileButton({link, buttonLinkText, icon}) {
    return(
        <button className="btn-mobile">
            <a href={link} target="blank">
                {buttonLinkText}
                <img src={icon} alt="icon" />
            </a>
        </button>
    )
}

export default MobileButton;