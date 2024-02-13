import React from 'react'

import Estadisticas from './estadisticas.jsx'
import Pedidos from './pedidos.jsx'
import Desempeño from './desempeño.jsx'
import ItemsMasVendidos from './itemsmasvendidos.jsx'
import TerminosMasBuscados from './terminosmasbuscados.jsx'
import Actividad from './actividad.jsx'
import Calificaciones from './calificaciones.jsx'
import Tips from './tips.jsx'

export default function Dashboard({proporcional}) {

    return (
        <div className=''
            style={{width: '100%', height: 'auto', paddingTop: 32 / proporcional, paddingBottom: 32 / proporcional, paddingLeft: 40 / proporcional, paddingRight: 40 / proporcional,
                    background: '#f9f9f9' }}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '50%', height: 50 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0, color: 'rgb(78, 78, 78)', fontWeight: 300}}>
                            Bievenido, Jorge!
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional, marginBottom: 16 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(28, 163, 94)', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Hoy
                        </p>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(28, 163, 94)', fontWeight: 400, marginRight: 5 / proporcional}}>
                            {`>`}
                        </p>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: 'rgb(28, 163, 94)', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Estadisticas
                        </p>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                    <Estadisticas proporcional={proporcional}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '50%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Pedidos recientes
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '50%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Hoy
                        </p>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            {'>'}
                        </p>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Desempeño
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', heigh: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '50%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <Pedidos proporcional={proporcional}/>
                    </div>
                    <div style={{width: '50%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <Desempeño proporcional={proporcional}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '50%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Items más vendidos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '50%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Términos más buscados
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', heigh: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '50%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <ItemsMasVendidos proporcional={proporcional}/>
                    </div>
                    <div style={{width: '50%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <TerminosMasBuscados proporcional={proporcional}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '40%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Actividad
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '40%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Calificaciones recientes
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '20%', height: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Tips
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', heigh: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '40%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <Actividad proporcional={proporcional}/>
                    </div>
                    <div style={{width: '40%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <Calificaciones proporcional={proporcional}/>
                    </div>
                    <div style={{width: '20%', height: 'auto', paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional}}>
                        <Tips proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}