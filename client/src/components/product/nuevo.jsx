import React, { useState } from 'react' 

import icono_guardar from '../../assets/iconos/icono_guardar_green_96.png'
import icono_publish from '../../assets/iconos/icono_publish_green_96.png'

import { useNavigate } from 'react-router-dom'
    
export default function ProductNuevo ({proporcional}){

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState ('')
    const [description, setDescription] = useState('')
    const [details, setDetails] = useState('')

    const navigate = useNavigate()

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <div className='d-flex' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: '50%', height: 50 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 4, fontWeight: 499, color: 'rgb(175, 175, 175)',
                        textAlign: 'start', cursor: 'pointer'}} onClick={() => navigate ('/productos')}>
                        {'<'} Productos
                    </p>
                    <p style={{fontSize: 26 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 4, fontWeight: 300, color: 'rgb(78, 78, 78)',
                        textAlign: 'start'}}>
                        Nuevo producto
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional, paddingTop: 10 / proporcional}}>
                    <butto className='rounded' style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional, border: '1px solid rgb(28, 163, 94)', cursor: 'pointer'}}>
                        <img src={icono_guardar} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 11 / proporcional}}/>
                    </butto>
                    <div className='d-flex' style={{width: 150 / proporcional, height: 40 / proporcional, border: '1px solid rgb(28, 163, 94)', cursor: 'pointer', borderRadius: 16 / proporcional,
                        paddingLeft: 20 / proporcional, margin: 5}}>
                        <div className='d-flex justify-content-center' style={{width: 120 / proporcional, height: 38 / proporcional, borderRight: '1px solid rgb(28, 163, 94)', cursor: 'pointer',
                            paddingRight: 20 / proporcional}}>
                            <img src={icono_publish} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 5 / proporcional, marginTop: 13 / proporcional,
                                    marginBottom: 13 / proporcional}}/>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)'}}>
                                Publicar
                            </p>
                        </div>
                        <div style={{width: 30 / proporcional, height: 40 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)', textAlign: 'center'}}>
                                {'>'}
                            </p>
                        </div>
                    </div>
                </div>           
            </div>      
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '65%', height: 'auto', paddingRight: 12 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 14, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                            Información producto
                        </p>
                        <div className='shadow rounded' style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                            <div style={{width: '100%', height: 65 / proporcional, marginBottom: 16 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(124, 124, 124)', lineHeight: `${21 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                    Título
                                </p>
                                <input 
                                    type='default'
                                    className='form-control'
                                    style={{width: '100%', height: 36 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, 
                                        paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional, border: '1px solid rgb(230, 230, 230)', fontSize: 16 / proporcional}}
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    placeholder='Título del producto'
                                    id='title'/>
                            </div>
                            <div style={{width: '100%', height: 65 / proporcional, marginBottom: 16 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(124, 124, 124)', lineHeight: `${21 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                    Categoría
                                </p>
                                <select 
                                    className='form-select'
                                    style={{width: '100%', height: 36 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, 
                                        paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional, border: '1px solid rgb(230, 230, 230)', fontSize: 16 / proporcional}}
                                    value={category}
                                    onChange={(value) => setCategory(value)}>
                                    <option value='0'>Seleccionar categoría</option>
                                </select>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(124, 124, 124)', lineHeight: `${21 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                    Descripción
                                </p>
                                <textarea 
                                    type='default'
                                    className='form-control'
                                    style={{width: '100%', height: 104 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, 
                                        paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional, border: '1px solid rgb(230, 230, 230)', fontSize: 16 / proporcional}}
                                    value={description}
                                    rows={4}
                                    onChange={(event) => setDescription(event.target.value)}/>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(124, 124, 124)', lineHeight: `${21 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                    Detalles
                                </p>
                                <textarea 
                                    type='default'
                                    className='form-control'
                                    style={{width: '100%', height: 104 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, 
                                        paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional, border: '1px solid rgb(230, 230, 230)', fontSize: 16 / proporcional}}
                                    value={details}
                                    rows={4}
                                    onChange={(event) => setDetails(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '35%', height: 'auto', paddingRight: 12 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, marginTop: 14 / proporcional, color: 'rgb(28, 163, 94)', fontWeight: 400}}>
                        Precio
                    </p>
                    <div className='shadow rounded' style={{width: '100%', height: 'auto', padding: 32 / proporcional}}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}