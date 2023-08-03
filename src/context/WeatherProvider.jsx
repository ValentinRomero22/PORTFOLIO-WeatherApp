import { useEffect, useState } from "react"
import { WeatherContext } from "./WeatherContext"
import { API_KEY, BASE_URL } from "../helpers/apiConfig"

export const WeatherProvider = ({ children }) => {
    const [currentWeather, setCurrentWeather] = useState({})
    const [forecast, setForecast] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getCurrentWeather = () => {
        fetch(`${BASE_URL}current.json?key=${API_KEY}&q=Montevideo`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentWeather(data)
            })
            .catch((error) => setError(error))
    }

    const getNextDaysForecast = () => {
        fetch(`${BASE_URL}forecast.json?key=${API_KEY}&q=Montevideo&days=7`)
            .then((res) => res.json())
            .then((data) => {
                setForecast(data)
            })
            .catch((error) => setError(error))
    }

    useEffect(() => {
        getCurrentWeather()
        getNextDaysForecast()

        setLoading(false)
    }, [])

    return (
        <WeatherContext.Provider
            value={{
                currentWeather,
                forecast,
                loading,
                error
            }}>
            {children}
        </WeatherContext.Provider>
    )
}