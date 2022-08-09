import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Sidebar from '../common/Sidebar'


export default function Dashboard() {
  return (
    <div className='d-flex flex-column'>
        <Navbar/>
        <div className='d-flex'>
            <Sidebar/>
            <div className='w-100' style={{marginTop:"57px"}}>
                <img width={100} src={"/assets/GraphicSide.svg"}/>
            <Outlet/>
            </div>
        </div>
    </div>
   
  )
}
