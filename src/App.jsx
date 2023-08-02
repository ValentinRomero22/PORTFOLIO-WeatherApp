import { AppRouter } from "./AppRouter"
import { WeatherProvider } from "./context/WeatherProvider"

export const App = () => {
    return (
        <div id="app">
            <WeatherProvider>
                <AppRouter />
            </WeatherProvider>
        </div>
    )
}