import React from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/navbar'
import Table from '../../components/table'

const  Analytics = () => {
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

export default Analytics
