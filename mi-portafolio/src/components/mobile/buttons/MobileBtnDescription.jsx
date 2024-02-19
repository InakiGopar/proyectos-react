import './styles/MobileBtnDescription.css';

function MobileBtnDescription( { seeDescription} ) {

    return(
        <button className="description-btn" onClick={seeDescription}>
            +
        </button>
    )

}

export default MobileBtnDescription;