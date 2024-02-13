import React from 'react'

import icono_dollar from '../../assets/iconos/icono_dollar_green_96.png'
import icono_shop from '../../assets/iconos/icono_shop_green_96.png'
import icono_sessions from '../../assets/iconos/icono_sessions_green_96.png'
import icono_user from '../../assets/iconos/icono_user_green_96.png'
import icono_return from '../../assets/iconos/icono_return_green_96.png'
import icono_comments from '../../assets/iconos/icono_comments_green_96.png'

export default function Estadisticas ({proporcional}) {

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 180 / proporcional}}>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_dollar} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Ganancias</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>S/. 314.20</p>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_shop} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Pedidos</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>16</p>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_sessions} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Sesiones</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>463</p>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_user} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Usuarios</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>17</p>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_return} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Devoluciones</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>2</p>
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white', cursor: 'pointer'}}>
                <div style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, marginBottom: 24 / proporcional}}>
                        <div className='rounded-circle d-flex justify-content-center' style={{border: '1px solid #1ca35e', width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}>
                            <img src={icono_comments} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%',  height: 'auto'}}>
                        <p style={{fontSize: 10 / proporcional, textAlign: 'center', lineHeight: `${14 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(124, 124, 124)', fontWeight: 400}}>Comentrios</p>
                        <p style={{fontSize: 16 / proporcional, textAlign: 'center', lineHeight: `${20 / proporcional}px`, marginBottom: 4 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>5</p>
                    </div>
                </div>
            </div>
        </div>

    )
}