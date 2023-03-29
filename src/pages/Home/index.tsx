import React from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/navbar'
import Table from '../../components/table'

const  Home = () => {
  return (
    <>
    <Navbar />
    <div className='main'>
        <AnalyticBox />
        <Table />
    </div>
    
    </>
  )
}

export default Home
