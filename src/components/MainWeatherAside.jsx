export const MainWeatherAside = ({currentWeather}) => {
    
    const { current, location } = currentWeather

    return (
        <article>
            <img src={current.condition.icon} alt="Condition Icon" />
            <p>{current.temp_c}° C</p>
            {/* <p>{current.temp_f}</p> */}
            <p>{current.condition.text}</p>
        </article>
    )
}