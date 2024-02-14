import React from 'react'

import icono_star from '../../assets/iconos/icono_star_green_96.png'

export default function Calificaciones ({proporcional}){
    
    return (
        <div className='shadow' style={{width: '100%', height: '100%', padding: 32 / proporcional, borderRadius: 16 / proporcional}}>
            <div className='' style={{width: '100%', height: '100%', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                    <div style={{width: 64 / proporcional, height: 80 / proporcional, borderRadius: 16 / proporcional, background: '#bdbdbd'}}/>
                    <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 16 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}pjx`, fontWeight: 400, color: 'rgb(78, 78, 78)', marginBottom: 4 / proporcional}}>
                            Kathleen Bertha
                        </p>
                        <div style={{width: '100%'}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, color: 'rgb(175, 175, 175)', marginBottom: 4 / proporcional}}>
                                Chocolate bar marzipan carrot cake ...
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 18 / proporcional}}>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                    <div style={{width: 64 / proporcional, height: 80 / proporcional, borderRadius: 16 / proporcional, background: '#bdbdbd'}}/>
                    <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 16 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}pjx`, fontWeight: 400, color: 'rgb(78, 78, 78)', marginBottom: 4 / proporcional}}>
                            Kathleen Bertha
                        </p>
                        <div style={{width: '100%'}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, color: 'rgb(175, 175, 175)', marginBottom: 4 / proporcional}}>
                                Chocolate bar marzipan carrot cake ...
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 18 / proporcional}}>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                            <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}