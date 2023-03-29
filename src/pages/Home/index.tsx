import React from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'

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
