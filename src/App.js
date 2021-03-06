import './App.css';
import Input from './Input';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Countries from './countries'
const token = `pk.eyJ1IjoiamF2aGExMjMiLCJhIjoiY2wwYWU5Z3Z6MG04ZTNjcXVpaWlmcXBvayJ9.WzHISwNEgo9Yt1TMPcnf5w`
function App() {
  const [ivalue, setivalue] = useState([])
  const [click, setclick] = useState([])
  const [countries, setcountries] = useState([])
  const inputfn = (e) => {
    setivalue(e.target.value)
  }
  const onclick = () => {
    setclick(ivalue)
    setivalue('')
  }
  useEffect(() => {
    const fn = async () => {
      const data = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${click}.json?access_token=${token}`)
      const results = data.data.features
      setcountries(results)
    }
    fn()
  }, [click])
  return (
    <div className='bgimage'>
      <div>
             
      </div>
      <div className='blur'>
        <Input ivalue={ivalue} inputfn={inputfn} onclick={onclick} />
        <div className='container'>
          {countries.map(({ place_name, center }, i) => {
            return <Countries center={center} index={i} key={i} name={place_name} countries={countries} setcountries={setcountries} />
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
