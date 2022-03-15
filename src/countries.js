import './App.css';
import Country from './Country';
import { useEffect, useState } from 'react'
import axios from 'axios';
function Countries({ name, center }) {
    const [bool, setbool] = useState(true)
    const [info, setinfo] = useState()
    useEffect(() => {
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${center[1]},${center[0]}`)
            const temp = data.data.daily.data[0].apparentTemperatureHigh
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
            <>
                {info.map(({ time, summary, icon, sunriseTime, sunsetTime, temperatureHigh, temperatureLow }, i) => {
                    return <Country name={name} key={i} time={time} summary={summary} icon={icon} sunriseTime={sunriseTime} sunsetTime={sunsetTime} temperatureHigh={temperatureHigh} temperatureLow={temperatureLow} />
                })}

            </>

        )
    } else {
        return (
            <div className='flex'>
                <div>{name}</div>
                <button onClick={clickb}>b</button>

            </div>
        );
    }
}

export default Countries;
