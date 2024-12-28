import { useState } from "react";

export default Home;

function Home() {
    return (

        <div>
            Hello World
            <Contador />
        </div>
    )
}


function Contador() {
    const [contador, setContador] = useState(1);
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', border: '2px solid black', width: '150px', gap: '10px', alignItems: 'center' }} >{contador}
                <button style={{ width: '100px' }} onClick={addContador}>Adicionar</button>
                <button style={{ width: '100px' }} onClick={subContador}>Reduzir</button>
            </div>
        </div>
    )
    function addContador() {
        setContador(contador + 1);
    }
    function subContador() {
        setContador(contador - 1);
    }
}

