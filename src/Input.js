 import './App.css'
 function Input({ ivalue , inputfn, onclick, }) {
    return (
        <div className='flex spacebtwn'>
            <input value={ivalue}  onChange={inputfn} placeholder='Search location'></input>
       
                <button className="clickbtn" onClick={onclick}>Search</button>
      
            
        </div>
    );
}

export default Input;
