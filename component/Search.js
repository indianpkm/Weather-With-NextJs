import { fetchData } from '@/slice/Slice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './[Display].module.css'

const Search = () => {
  const [value,setValue]=useState('')
  const dispatch = useDispatch();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   console.log("Latitude is:", lat)
  //   console.log("Longitude is:", long)
  // }, [lat, long]);

  useEffect(()=>{
    dispatch(fetchData(value))
  },[value])

  return (
    <div className={style.searchContainer}>
      <input  className={style.input} placeholder='Type city' onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default Search