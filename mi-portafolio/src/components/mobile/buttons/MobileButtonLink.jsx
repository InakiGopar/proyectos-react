import './styles/MobileButtonLink.css';

function MobileButtonLink({link, buttonLinkText, icon}) {
    return(
        <button className="btn-mobile">
            <a href={link} target="blank">
                {buttonLinkText}
                <img src={icon} alt="icon" />
            </a>
        </button>
    )
}

export default MobileButtonLink;