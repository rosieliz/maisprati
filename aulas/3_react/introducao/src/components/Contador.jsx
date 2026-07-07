function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => setCount(count - 1)}>
                Decrementar
            </button>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}

export default Contador;
