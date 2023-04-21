import { fetchData } from '@/slice/Slice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Display from './Display';
import Search from './Search';
import style from './[home].module.css'

const Home = () => {


  return (
    <div className={style.container}>
      <Search/>
      <Display/>
    </div>
  )
}

export default Home