import React, { useState } from 'react'

import icono_plus from '../../assets/iconos/icono_plus_green_96.png'
import icono_print_green from '../../assets/iconos/icono_print_green_96.png'
import icono_print_grey from '../../assets/iconos/icono_print_grey_96.png'
import icono_download_green from '../../assets/iconos/icono_download_green_96.png'
import icono_download_grey from '../../assets/iconos/icono_download_grey_96.png'
import icono_search_green from '../../assets/iconos/icono_search_green_96.png'
import icono_search_grey from '../../assets/iconos/icono_search_grey_96.png'
import icono_up from '../../assets/iconos/icono_up_grey_96.png'
import icono_down from '../../assets/iconos/icono_down_grey_96.png'
import { useNavigate } from 'react-router-dom'

export default function Productlist ({proporcional}){

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <div style={{width: '50%', height: 50 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 4, fontWeight: 499, color: 'rgb(175, 175, 175)',
                        textAlign: 'start', cursor: 'pointer'}} onClick={() => navigate ('/')}>
                        {'<'} Inicio
                    </p>
                    <p style={{fontSize: 26 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 4, fontWeight: 300, color: 'rgb(78, 78, 78)',
                        textAlign: 'start'}}>
                        Lista de productos
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional, paddingTop: 10 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 40 / proporcional, border: '1px solid rgb(28, 163, 94)', cursor: 'pointer',
                        borderRadius: 16 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <img src={icono_plus} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 5 / proporcional, marginTop: 13 / proporcional,
                                marginBottom: 13 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)'}}>
                            Agregar producto
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 80 / proporcional, height: 40 / proporcional, border: '1px solid rgb(28, 163, 94)', borderRadius: 16 / proporcional,
                        marginLeft: 4 / proporcional}}>
                        <div style={{marginLef: 16 / proporcional, marginRight: 8 / proporcional, width: 50 / proporcional, height: 38 / proporcional, 
                                borderRight: '1px solid rgb(28, 163, 94)'}}>

                        </div>
                        <div style={{width: 30 / proporcional, height: 40 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)', textAlign: 'center'}}>
                                {'>'}
                            </p>
                        </div>
                    </div>
                </div>           
            </div>      
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 16 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '50%', height: 50 / proporcional}}>
                    <div className='d-flex shadow-sm' style={{width: 230 / proporcional, height: 50 / proporcional, background: 'white', borderRadius: 16 / proporcional}}>
                        <input
                            type='default'
                            className='form-control border-0'
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder='Buscar'
                            style={{width: 200 / proporcional, height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400,
                                color: 'rgb(78, 78, 78)'}}/>
                        <div className='d-flex justify-content-center' style={{width: 30 / proporcional, height: 50 / proporcional}}>
                            <img src={icono_search_grey} style={{width: 17 / proporcional, height: 17 / proporcional, marginTop: 16.5 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional}}>
                    <button className='shadow-sm  border-0' style={{width: 50 / proporcional, height: 50 / proporcional, background: 'white', marginRight: 10 / proporcional,
                        borderRadius: 8 / proporcional}}>
                        <img src={icono_print_grey} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                    </button>
                    <button className='shadow-sm  border-0' style={{width: 50 / proporcional, height: 50 / proporcional, background: 'white', marginRight: 10 / proporcional,
                        borderRadius: 8 / proporcional}}>
                        <img src={icono_download_grey} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                    </button>
                    <button className='shadow-sm  border-0' style={{width: 'auto', height: 50 / proporcional, background: 'white', marginRight: 10 / proporcional,
                        borderRadius: 8 / proporcional, fontSize: 16 / proporcional, height: 50 / proporcional, color: 'rgb(124, 124, 124)',
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            10 items {'>'}
                    </button>
                </div>
            </div>     
            <div className='d-flex' style={{width: '100%', height: 20 / proporcional, marginBottom: 16 / proporcional}}>
                <div style={{width: 88 / proporcional, height: 20 / proporcional}}>

                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 20 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                    <div className='d-flex' style={{width: '32%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                            textAlign: 'start', marginRight: 5 / proporcional}}>
                            Título
                        </p>
                        <img src={icono_up} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            marginRight: 2 / proporcional, cursor: 'pointer'}}/>
                        <img src={icono_down} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            cursor: 'pointer'}}/>
                    </div>
                    <div className='d-flex' style={{width: '16%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                            textAlign: 'start', marginRight: 5 / proporcional}}>
                            Stock
                        </p>
                        <img src={icono_up} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            marginRight: 2 / proporcional, cursor: 'pointer'}}/>
                        <img src={icono_down} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            cursor: 'pointer'}}/>
                    </div>
                    <div className='d-flex' style={{width: '24%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                            textAlign: 'start', marginRight: 5 / proporcional}}>
                            Precio
                        </p>
                        <img src={icono_up} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            marginRight: 2 / proporcional, cursor: 'pointer'}}/>
                        <img src={icono_down} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            cursor: 'pointer'}}/>
                    </div>
                    <div className='d-flex' style={{width: '16%', height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                            textAlign: 'start', marginRight: 5 / proporcional}}>
                            Estado
                        </p>
                        <img src={icono_up} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            marginRight: 2 / proporcional, cursor: 'pointer'}}/>
                        <img src={icono_down} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional,
                            cursor: 'pointer'}}/>
                    </div>
                    <div style={{width: '12%', height: 20 / proporcional}}/>
                </div>
            </div>
            <div className='overflow-auto' style={{width: '100%', maxHeight: '100%'}}>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex shadow' style={{width: '100%', height: 72 / proporcional, marginBottom: 16 / proporcional, borderRadius: 8 / proporcional}}>
                    <div style={{width: 88 / proporcional, height: 72 / proporcional, background: '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                    borderBottomLeftRadius: 8 / proporcional}}/>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 72 / proporcional, paddingLeft: 32 / proporcional, paddingRight: 32 / proporcional}}>
                        <div style={{width: '32%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                Wooden Animal Toys
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(175, 175, 175)',
                                textAlign: 'start'}}>
                                #2342
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                2.511
                            </p>
                        </div>
                        <div style={{width: '24%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(124, 124, 124)',
                                textAlign: 'start'}}>
                                S/. 62.20
                            </p>
                        </div>
                        <div style={{width: '16%', height: 72 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(28, 163, 94)',
                                textAlign: 'start'}}>
                                En venta
                            </p>
                        </div>
                        <div style={{width: '12%', height: 20 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}