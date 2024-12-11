class WeatherService {
    constructor() {
        this.API_KEY = '2051c2f5bcf64c6b39fe9047ef374226';
        this.BASE_URL = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentWeather(lat, lon) {
        try {
            const response = await fetch(
                `${this.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching current weather:', error);
            throw error;
        }
    }

    async getForecast(lat, lon) {
        try {
            const response = await fetch(
                `${this.BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching forecast:', error);
            throw error;
        }
    }

    async getWeatherByCity(cityName) {
        try {
            const response = await fetch(
                `${this.BASE_URL}/weather?q=${cityName}&appid=${this.API_KEY}&units=metric`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching weather by city:', error);
            throw error;
        }
    }

    async getForecastByCity(cityName) {
        try {
            const response = await fetch(
                `${this.BASE_URL}/forecast?q=${cityName}&appid=${this.API_KEY}&units=metric`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching forecast by city:', error);
            throw error;
        }
    }
}

// Export the WeatherService class
window.WeatherService = WeatherService;