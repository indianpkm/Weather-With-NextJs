import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './[Display].module.css'
import Loading from './Loading'

const ImageComponent = () => {
  const { data, isLoading, error } = useSelector(state => state.data || {})

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
    return <div style={{backgroundColor:'red',color:'#fff'}}>City not found</div>
  }

  return (
    <div className={style.imageContainer}>
      {
        data.main && (
          <>
          <img src={data.weather[0].main==='Clear'?'full_sun.png':data.weather[0].main==='Clouds'?'cloud.png':data.weather[0].main==='Dust'?'dust.png':data.weather[0].main==='Rain'?'rain.png':'air.png'} width={150}     alt='Weather_Image'/>
          </>
        )
      }
    </div >
  )
}

export default ImageComponent
