import './App.css';
import Country from './Country';
import { useEffect, useState } from 'react'
import axios from 'axios';
function Countries({ name, center, index }) {
    const [bool, setbool] = useState(true)
    const [info, setinfo] = useState([])
    useEffect(() => {
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${center[1]},${center[0]}`)
            const arr = data.data.daily.data
            setinfo(arr)
        }
        darksky()
    }, [])

    const clickb = () => {
        setbool(!bool);
    }
    if (!bool) {
        return (
            <div className='flex container'>
                {info.map(({ time, summary, icon, temperatureHigh, temperatureLow }, i) => {
                    return <Country key={i} time={time} summary={summary} icon={icon} temperatureHigh={temperatureHigh} temperatureLow={temperatureLow} />
                })}
            </div>
        )
    } else {
        return (
            <div
                className='flex'>
                <div>{index+1}.{name}</div>
                <button onClick={clickb}>Weather</button>
            </div>
        );
    }
}
export default Countries;
