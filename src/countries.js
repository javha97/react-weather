import './App.css';
import Country from './Country';
import { useEffect, useState } from 'react'
import axios from 'axios';
function Countries({ name, countries, center, index, setcountries }) {
    const [bool, setbool] = useState(false)
    const [info, setinfo] = useState([])
    useEffect(() => {
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${center[1]},${center[0]}`)
            const arr = data.data.daily.data
            setinfo(arr)
        }
        darksky()
    }, [])
    console.log(index);
    console.log(countries);
    const clickb = () => {
        let a = countries.filter((_el, i) => {
            return i === index
        })
        setcountries(a)
        setbool(true);
    }
    return (
        <>
            {bool && <div className='flex container'>
                {info.map(({ time, summary, icon, temperatureHigh, temperatureLow }, i) => {
                    return (<Country key={i} time={time} summary={summary} icon={icon} temperatureHigh={temperatureHigh} temperatureLow={temperatureLow} />)
                })}
            </div>}
            {!bool &&
                <div
                    className='flex'>
                    <div>{index + 1}.{name}</div>
                    <button onClick={clickb}>Weather</button>
                </div>}
        </>
    )

}
export default Countries;
