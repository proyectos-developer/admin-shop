import React from 'react'

export default function Desempeño ({proporcional}){

    return (
        <div style={{width: '100%', height: '100%'}}>
            <div className='shadow-sm' style={{width: '100%', height: '100%', background: 'white', padding: 32 / proporcional, borderRadius: 16 / proporcional}}>

            </div>
        </div>
    )
}