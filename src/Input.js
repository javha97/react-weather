import { useEffect, useState } from 'react'
function Input({ ivalue, setivalue , inputfn, onclick, }) {

    return (
        <>
            <input value={ivalue} onChange={inputfn}></input>
            <button onClick={onclick}>Search</button>
        </>
    );
}

export default Input;
