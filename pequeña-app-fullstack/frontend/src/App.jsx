import { useEffect, useState } from "react"


export function App() {
    const [productos, setProductos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `http://localhost:1111/productos?page=${page}`;

    useEffect(()=> {
        const fetchProductos = async() => {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error('No se pudo obtener la lista de productos :(');
                }
                const data = await response.json();
                if(data.data.length === 0) {
                    setPage(1);
                }
                setProductos(data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchProductos();
    }, [page]);

    const turnPage = ()=> {
        setPage(page + 1);
    }

    const previousPage = ()=> {
        setPage(page - 1);
    }

    return (
        <main>
            <h1>Productos</h1>
            {loading && <p>Loading...</p>}
            {error && <h4>{error}</h4>}
            <ul>
                {productos.map(producto => (
                    <li key={producto.id_producto}>{producto.nombre}</li>
                ))}
            </ul>
            <button onClick={turnPage}>Siguiente</button>
            {page > 1 && <button onClick={previousPage}>Anterior</button>}
        </main>

    )
}