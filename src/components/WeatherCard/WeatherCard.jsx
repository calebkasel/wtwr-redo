import './WeatherCard.css';
import sunny from '../../assets/day/sunny.svg';

function WeatherCard ({weather}) {
    return (
        <section className='weather-card__container'>
            <h1 className='weather-card__temp'>{weather.temp}°F</h1>
            <img src={sunny} alt="sunny" className="weather-card__image" />
        </section>
    )
}

export default WeatherCard;