import React from 'react'

export default function Tips ({proporcional}){
    
    return (
        <div className='shadow' style={{width: '100%', height: '100%', padding: 32 / proporcional, borderRadius: 16 / proporcional}}>
            <div className='' style={{width: '100%', height: '100%', paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}pjx`, fontWeight: 400, color: 'rgb(78, 78, 78)', marginBottom: 0 / proporcional}}>
                    ¿Más ventas?
                </p>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}pjx`, fontWeight: 400, color: 'rgb(28, 163, 94)', marginBottom: 16 / proporcional}}>
                    ¡Agrega nuevos productos!
                </p>
                <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}pjx`, fontWeight: 400, color: 'rgb(175, 175, 175)', marginBottom: 24 / proporcional}}>
                    Cheesecake chocolate carrot cake pie lollipop aple pie lemon cream lollipop.
                    Oat cake lemon drops gummi pie cake cotton
                </p>
                <div className='d-flex justify-content-center' style={{width: 145 / proporcional, height: 40 / proporcional, border: '1px solid rgb(28, 163, 94)', borderRadius: 16 / proporcional,
                    cursor: 'pointer'}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)'}}>
                        Agregar producto
                    </p>
                </div>
            </div>
        </div>
    )
}