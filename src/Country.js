
function Country({ name, time, summary, icon, sunriseTime, sunsetTime, temperatureHigh, temperatureLow }) {
    let stamp = new Date(time * 1000)
    const celc = ((temperatureHigh - 32) * 5 / 9)
    const rounded = Math.round(celc)
    const celclow = ((temperatureLow - 32) * 5 / 9)
    const lowrounded = Math.round(celclow)
    return (
        <>
            <div>
                <div>{stamp?.getDay() === 0 ? 7 : stamp?.getDay()}</div>
                <div>{name}-t Цаг агаар өдөртөө {rounded} градус</div>
                <div>{name}-t Цаг агаар шөнөдөө {lowrounded} градус  </div>
                <div>{summary}</div>
            </div>
        </>
    );

}

export default Country;
