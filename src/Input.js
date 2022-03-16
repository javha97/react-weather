function Input({ ivalue , inputfn, onclick, }) {

    return (
        <>
            <input value={ivalue} onChange={inputfn}></input>
            <button onClick={onclick}>Search</button>
        </>
    );
}

export default Input;
