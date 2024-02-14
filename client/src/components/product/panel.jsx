import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductoPanel ({proporcional}){
    
    return (
        <div style={{width: '100%', height: '100vh', paddingLeft: 40 / proporcional, paddingRight: 40 / proporcional, paddingTop: 32 / proporcional, paddingBottom: 32 / proporcional}}>
            <div style={{width: '100%', height: '100vh', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                <Outlet/>
            </div>
        </div>
    )
}