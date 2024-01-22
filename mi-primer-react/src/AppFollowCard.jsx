import { useState } from "react";

export function AppFollowCard( {name, userName, age, civilStatus} ){
    const[isFollowing, setIsFollowing] = useState(false);

    const btnText = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing 
            ? 'app-follow-card-button is-following'
            : 'app-follow-card-button';

    const handleClick = ()=>{
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='app-follow-card'>
            <header className='app-follow-card-header'>
                <img alt="imagen de usuario" 
                    src="https://unavatar.io/youtube/casey"
                    className='app-follow-card-img'
                />
                <div className='app-follow-card-info'>
                    <strong> {name} </strong>
                    <strong> {userName(name)} </strong>
                    <span>Edad: {age} </span>
                    <span>Estado: {civilStatus} </span>
                </div>
            </header>
            <aside className='app-follow-card-aside'>
                <button className={btnClassName} onClick={handleClick} >
                    {btnText}
                </button>
            </aside>
        </article>
    )
}