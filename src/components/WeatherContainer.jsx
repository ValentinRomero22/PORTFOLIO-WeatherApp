import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"

export const WeatherContainer = () => {
    const { currentWeather, loading, error } = useContext(WeatherContext)
    const [location, setLocation] = useState({})

    return (
        <p>Weather container</p>
    )
}