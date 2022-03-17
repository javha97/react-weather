import './App.css';
import WeatherIcon from 'react-icons-weather';
function Country({ time, summary, temperatureHigh,icon, temperatureLow }) {
    let stamp = new Date(time * 1000)
    const celc = ((temperatureHigh - 32) * 5 / 9)
    const rounded = Math.round(celc)
    const celclow = ((temperatureLow - 32) * 5 / 9)
    const lowrounded = Math.round(celclow)
    return (
        <>
            <div className='s_container'>
                <h3>
                    {stamp?.getDay() === 1 && "Monday"}
                    {stamp?.getDay() === 2 && "Tuesday"}
                    {stamp?.getDay() === 3 && "Wednesday"}
                    {stamp?.getDay() === 4 && "Thursday"}
                    {stamp?.getDay() === 5 && "Friday"}
                    {stamp?.getDay() === 6 && "Saturday"}
                    {stamp?.getDay() === 0 && "Sunday"}
                </h3>
                <div className='iconcont'>
                                    <WeatherIcon name="darksky" iconId={icon} flip="horizontal" className="images" rotate="90" />

                </div>
                <div className='text'> {rounded}/{lowrounded} </div>
                {/* <div className='text'>{summary}</div> */}
            </div>
        </>
    );

}
export default Country;
