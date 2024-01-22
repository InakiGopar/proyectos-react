import './App.css';
import { AppFollowCard } from './AppFollowCard.jsx';

export function App(){
    const validUserName = (name)=>`@${name.split(' ').join('').toLowerCase()}`;
    
    return(
        <>

        <AppFollowCard
        name = 'Jorge Milei'  //prop
        userName = {validUserName} //prop con funcion
        age = '45' //prop
        civilStatus='Soltero' //prop
        />

        <AppFollowCard
        name = 'Carlitos'
        userName = {validUserName}
        age = '35'
        civilStatus='Soltero' 
        />

        </>
    )
}