import { useEffect, useState } from "react"
import { WeatherContext } from "./WeatherContext"
import { API_KEY, BASE_URL } from "../helpers/apiConfig"

export const WeatherProvider = ({ children }) => {
    const [currentWeather, setCurrentWeather] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getCurrentWeather = async() => {
        fetch(`${BASE_URL}current.json?key=${API_KEY}&q=Montevideo`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentWeather(data)
                setLoading(false)
            })
            .catch(error => setError(error))
    }

    useEffect(() =>{
        getCurrentWeather()     
    }, [])

    return (
        <WeatherContext.Provider
            value={{
                currentWeather,
                loading,
                error
            }}>
            {children}
        </WeatherContext.Provider>
    )
}