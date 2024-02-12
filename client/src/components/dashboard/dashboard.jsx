import React from 'react'

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
                <div className='d-flex justify-content-between' style={{width: '100%', height: 180 / proporcional}}>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                    <div className='shadow rounded' style={{width: '15%', height: 180 / proporcional, background: 'white'}}>

                    </div>
                </div>
            </div>
        </div>
    )
}