import React from 'react'

import MenuLateral from '../comunes/menulateral.jsx'
import { Outlet } from 'react-router-dom'

export default function GlobalDashboard({proporcional}) {

  return (
    <div className='d-flex' style={{width: '100%'}}>
        <div style={{width: 300 / proporcional , height: 950 / proporcional, background: '#1ca35e'}}>
          <MenuLateral proporcional={proporcional}/>
        </div>
        <div style={{width: 1620 / proporcional, height: 950 / proporcional, background: 'white'}}>
          <Outlet/>
        </div>
    </div>
  )
}