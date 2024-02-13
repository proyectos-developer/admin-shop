import React from 'react'

export default function Calificaciones ({proporcional}){
    
    return (
        <div className='shadow' style={{width: '100%', height: 'auto', padding: 32 / proporcional, borderRadius: 16 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 80 / proporcional, marginBottom: 16 / proporcional}}>
                    <div style={{width: 64 / proporcional, height: 80 / proporcional, borderRadius: 16 / proporcional, background: '#bdbdbd'}}/>
                    <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 16 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, color: 'rgb(78, 78, 78)', marginBottom: 4 / proporcional}}>
                            Kathleen Bertha
                        </p>
                        <div style={{width: '100%'}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, color: 'rgb(175, 175, 175)', marginBottom: 4 / proporcional}}>
                                Chocolate bar marzipan carrot cake gringerbread pasty...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}