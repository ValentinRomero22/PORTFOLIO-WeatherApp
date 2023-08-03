import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { MainWeatherAside } from "./MainWeatherAside"
import { CurrentWeatherDetail } from "./CurrentWeatherDetail"
import { ForecastWeather } from "./ForecastWeather"

export const WeatherContainer = () => {
    const { currentWeather, loading, error } = useContext(WeatherContext)

    return (
        <p>Weather container</p>
    )
}