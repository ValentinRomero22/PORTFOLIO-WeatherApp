import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { MainWeatherAside } from "./MainWeatherAside"
import { CurrentWeatherDetail } from "./CurrentWeatherDetail"
import { ForecastWeather } from "./ForecastWeather"

export const WeatherContainer = () => {
    const { currentWeather, forecast, loadingCurrentWeather, loadingForecast, error } = useContext(WeatherContext)

    if (loadingCurrentWeather || loadingForecast) return (<p>Cargando...</p>)

    return (
        <div className="mainWeatherCotainer">
            <MainWeatherAside currentWeather={currentWeather} />
            <CurrentWeatherDetail currentWeather={currentWeather} />
            <ForecastWeather forecast={forecast} />
        </div>
    )
}