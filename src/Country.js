import pcloudy from './images/cloudy-day.png'
import clear from './images/sunshine.png'
import fog from './images/foggy.png'
import cloudy from './images/cloudy.png'
import rainy from './images/raining.png'
import './App.css';
function Country({ time, summary, icon, temperatureHigh, temperatureLow }) {
    // console.log(icon);
    let stamp = new Date(time * 1000)
    const celc = ((temperatureHigh - 32) * 5 / 9)
    const rounded = Math.round(celc)
    const celclow = ((temperatureLow - 32) * 5 / 9)
    const lowrounded = Math.round(celclow)
    return (
        <>
            <div className='s_container'>
                <h3>
                    {stamp?.getDay() === 1 ? "Monday" : console.log()}
                    {stamp?.getDay() === 2 ? "Tuesday" : console.log()}
                    {stamp?.getDay() === 3 ? "Wednesday" : console.log()}
                    {stamp?.getDay() === 4 ? "Thursday" : console.log()}
                    {stamp?.getDay() === 5 ? "Friday" : console.log()}
                    {stamp?.getDay() === 6 ? "Saturday" : console.log()}
                    {stamp?.getDay() === 0 ? "Sunday" : console.log()}
                </h3>
                {/* <div>{name}-t Цаг агаар шөнөдөө {lowrounded} градус  </div> */}
                {icon === 'partly-cloudy-day' && <img className='image' src={pcloudy}/>}
                {icon === 'rain' ? <img className='image' src={rainy}></img> : console.log()}
                {icon === 'fog' ? <img className='image' src={fog}></img> : console.log()}
                {icon === 'cloudy' ? <img className='image' src={cloudy}></img> : console.log()}
                {icon === 'clear-day' ? <img className='image' src={clear}></img> : console.log()}
                <div className='text'> {rounded}/{lowrounded} </div>
                <div className='text'>{summary}</div>
            </div>
        </>
    );

}
export default Country;
