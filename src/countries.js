import './App.css';
import Country from './Country';
import { useState } from 'react'
import axios from 'axios';
function Countries({ name, countries, index }) {
    const [info, setinfo] = useState([])
    const clickb = () => {
        // console.log(index);
        let a = countries.filter((_el, i) => {
            return i === index
        })
        let longlat = a[0].center
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${longlat[1]},${longlat[0]}`)
            const arr = data.data.daily.data
            setinfo(arr)
        }
        darksky()
    }
    return (
        <>
            <div
                className='flex countries'>
                <div className='eachcountry' onClick={clickb}>{name}</div>
                {/* <button onClick={clickb}>Weather</button> */}
            </div>
            <div className='flex margin-top'>
                {info.map(({ time, summary, icon, temperatureHigh, temperatureLow }, i) => {
                    return (<Country key={i} time={time} summary={summary} icon={icon} temperatureHigh={temperatureHigh} temperatureLow={temperatureLow} />)
                })}
            </div>
        </>
    )

}
export default Countries;
