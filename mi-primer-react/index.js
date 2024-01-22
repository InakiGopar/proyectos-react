
function HomePage(){
    const names = ['guille', 'iñaki', 'pepe', 'marcelo'];

    function click(){
        setLikes(likes + 1);
    }

    const [likes, setLikes] = React.useState(0);

    return(
        <div>
            <Header title = 'Hello word'/>
            <ul>
                {names.map((name)=>(
                    <li key={name}> {name} </li>
                ))}
            </ul>
            <button onClick={click}>Like({likes})</button>
        </div>
    );
}

function Header({title}){
    return <h1>{title ? title: 'Default title'}</h1>
}


const root = ReactDOM.createRoot(app);

root.render(<HomePage/>);