import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './[Display].module.css'
import Loading from './Loading'
import ImageComponent from './ImageComponent'

const Display = () => {
  const { data, isLoading, error } = useSelector(state => state.data || {})
  const [sunriseTime, setSunrise] = useState(0)
  const [sunsetTime, setSunset] = useState(0)

  useEffect(() => {
    if (data && data.main) {
      const sunTime = new Date((data.sys.sunrise + data.timezone - 3600) * 1000);
      const setTime = new Date((data.sys.sunset + data.timezone - 3600) * 1000);
      setSunrise(sunTime.toLocaleTimeString());
      setSunset(setTime.toLocaleTimeString());
    }
  }, [data]);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className={style.error}>Error: {error.message}</div>
  }

  if (!data) {
    return <div>Data not found</div>
  }

  if (data.message == "city not found") {
    return <div style={{ backgroundColor: 'red', color: '#fff', borderRadius: 10, width: '10%', minWidth: 200, textAlign: 'center' }}>City not found</div>
  }

  return (
    < >
      {
        data.main &&
        <div className={style.container}>
          <h1 className={style.cityName}>{data.name}</h1>
          <h2 className={style.countryName}>Country : <strong>{data.sys.country}</strong></h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ImageComponent />
            <div style={{ alignSelf: 'center', alignItems: 'center', marginRight: '1rem' }}>
              <h3 className={style.weatherMain}>{data.weather[0].main}</h3>
              <div style={{ display: 'flex' }}>
                <h3 className={style.text}><strong>{(data.main.temp).toFixed(0) + ' ℃'}</strong></h3>
                <img src='temp.png' width={40} />
              </div>
              <h3 style={{ color: '#fff' }} >Feels like <strong>{(data.main.feels_like).toFixed(0)}</strong></h3>
            </div>
          </div>
          <div className={style.main}>
            <div>
              <h3 style={{ color: '#fff' }}>Humidity : </h3>
              <h3 style={{ color: '#fff' }}><strong>{data.main.humidity}%</strong></h3>
            </div>
            <div>
              <h3 style={{ color: '#fff' }}>Wind : </h3>
              <h3 style={{ color: '#fff' }}><strong>{(data.wind.speed).toFixed(0)} MPH</strong></h3>
            </div>
          </div>
          <div style={{ display: 'flex', padding: '1rem', justifyContent: 'space-around' }}>
            <div>
              <h3 style={{ color: '#fff', textAlign: 'center' }} >Sunrise</h3>
              <h3 style={{ color: '#fff', textAlign: 'center' }}><strong>{sunriseTime}</strong></h3>
              <img src='sunrise.png' alt='Sunrise_Image' width={100} />
            </div>
            <div>
              <h3 style={{ color: '#fff', textAlign: 'center' }}>Sunset</h3>
              <h3 style={{ color: '#fff', textAlign: 'center' }}><strong>{sunsetTime}</strong></h3>
              <img src='sunset.png' alt='Sunrise_Image' width={100} />
            </div>
          </div>
        </ div>
      }
    </ >
  )
}

export default Display
