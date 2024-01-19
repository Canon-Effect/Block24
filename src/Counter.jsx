const Counter = () => {
    // useState hook [value, setValue] = useState(initialValue)
    const [count, setCount] = useState(0)
    const changeCount = ()=>{
        setCount(count + 1)
    }
     return (
        <div>
            <p>{count}</p>
            {/* */}
            <button onClick={changeCount}>click</button>
        </div>
     );
};

export default Counter