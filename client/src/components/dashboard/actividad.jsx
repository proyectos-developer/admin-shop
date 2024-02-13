import React from 'react'

import icono_radio from '../../assets/iconos/icono_radio_green_96.png'
import icono_square from '../../assets/iconos/icono_square_green_96.png'
import icono_rombo from '../../assets/iconos/icono_rombo_green_96.png'

export default function Actividad ({proporcional}){
    
    return (
        <div className='shadow' style={{width: '100%', height: 'auto', padding: 32 / proporcional, borderRadius: 16 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_radio} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                Nuevo registro usuario
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                18 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_radio} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                3 nuevos productos agregados
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                18 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_square} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                Productos sin stock
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                16 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_square} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                Página categoría retorno un error
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                16 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_rombo} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                14 productos agregados
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                15 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_rombo} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                Nueva venta: vaso
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                15 Dic
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 24 / proporcional, marginBottom: 8 / proporcional}}>
                    <img src={icono_radio} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                    <div style={{width: '80%', height: 20 / proporcional, paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                Nueva venta: pan
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '15%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>
                                15 Dic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}