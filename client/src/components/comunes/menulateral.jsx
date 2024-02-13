import React, { useEffect, useState } from 'react'

import icono_profile from '../../assets/iconos/icono_profile_color_96.png'
import icono_search from '../../assets/iconos/icono_search_white_96.png'
import icono_lock from '../../assets/iconos/icono_lock_white_96.png'
import icono_light from '../../assets/iconos/icono_light_white_96.png'
import icono_notification from '../../assets/iconos/icono_notification_white_96.png'
import icono_shop from '../../assets/iconos/icono_shop_white_96.png'
import icono_products from '../../assets/iconos/icono_products_white_96.png'
import icono_orders from '../../assets/iconos/icono_orders_white_96.png'
import icono_customers from '../../assets/iconos/icono_customers_white_96.png'
import icono_storefronte from '../../assets/iconos/icono_storefronte_white_96.png'
import icono_shipping from '../../assets/iconos/icono_shipping_white_96.png'
import icono_discount from '../../assets/iconos/icono_discount_white_96.png'
import icono_settings from '../../assets/iconos/icono_settings_white_96.png'
import icono_right from '../../assets/iconos/icono_right_white_96.png'
import icono_down from '../../assets/iconos/icono_down_white_96.png'

import { useLocation } from 'react-router-dom'

export default function MenuLateral({proporcional}) {

    const location = useLocation ()
    
    const [menu, setMenu] = useState ('inicio')
    const [menu_opciones, setMenuOpciones] = useState ('')
    const [sub_menu_opciones, setSubMenuOpciones] = useState ('')
    const [pagina, setPagina] = useState ('')

    const [menu_productos, setMenuProductos] = useState (false)
    const [menu_orders, setMenuOrders] = useState (false)
    const [menu_customers, setMenuCustomers] = useState (false)
    const [menu_store, setMenuStore] = useState (false)
    
    useEffect(() => {
        setPagina(location.pathname.split('/')[1])
    }, [location.pathname])

    return (
        <div className='position-relative' style={{width: 300 / proporcional, paddingTop: 32 / proporcional, paddingBottom: 32 / proporcional, paddingLeft: 16 / proporcional,
                paddingRight: 16 / proporcional, borderTopRightRadius: 16 / proporcional, borderBottomRightRadius: 16 / proporcional}}>
            <div className='position-fixed'>
                <div className='d-flex justify-content-center' style={{width: 268 / proporcional, height: 'auto', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 35 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, fontWeight: 600, color: 'white',
                        textAlign: 'center'}}>
                        LOGO SHOP
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: 268 / proporcional, height: 'auto'}}>
                    <img src={icono_profile} className='rounded-circle' style={{width: 50 / proporcional, height: 50 / proporcional, marginLeft: 28 / proporcional,
                        marginRight: 28 / proporcional, marginBottom: 17 / proporcional, marginTop: 10 / proporcional,
                        background: '#bdbdbd'}}/>
                </div>
                <p style={{fontSize: 14 / proporcional, lineHeight: `${23 / proporcional}px`, marginBottom: 0, fontWeight: 400, textAlign: 'center',
                        color: 'white', marginBottom: 10 / proporcional}}>
                    Jorge Portocarrero
                </p>
                <div className='d-flex justify-content-center' style={{width: 268 / proporcional, height: 38 / proporcional}}>
                    <img src={icono_search} className='rounded' style={{width: 20 / proporcional, height: 20 / proporcional, margin: 9 / proporcional,
                            cursor: 'pointer', background: menu_opciones === 'search' ? '#34ad6f' : 'none'}}
                            onMouseOver={() => setMenuOpciones('search')} onMouseLeave={() => setMenuOpciones('')}/>
                    <img src={icono_lock} className='rounded' style={{width: 20 / proporcional, height: 20 / proporcional, margin: 9 / proporcional,
                            cursor: 'pointer', background: menu_opciones === 'lock' ? '#34ad6f' : 'none'}}
                            onMouseOver={() => setMenuOpciones('lock')} onMouseLeave={() => setMenuOpciones('')}/>
                    <img src={icono_light} className='rounded' style={{width: 20 / proporcional, height: 20 / proporcional, margin: 9 / proporcional,
                            cursor: 'pointer', background: menu_opciones === 'light' ? '#34ad6f' : 'none'}}
                            onMouseOver={() => setMenuOpciones('light')} onMouseLeave={() => setMenuOpciones('')}/>
                    <img src={icono_notification} className='rounded' style={{width: 20 / proporcional, height: 20 / proporcional, margin: 9 / proporcional,
                            cursor: 'pointer', background: menu_opciones === 'notificaciones' ? '#34ad6f' : 'none'}}
                            onMouseOver={() => setMenuOpciones('notificaciones')} onMouseLeave={() => setMenuOpciones('')}/>
                </div>
                <div style={{width: 268 / proporcional, height: 'auto', marginTop: 32 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 16 / proporcional, 
                    paddingRight: 16 / proporcional}}>
                    <div className='d-flex' style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, cursor: 'pointer', background: menu === 'panel' || pagina === '' ? '#34ad6f' : 'none',
                            borderRadius: 16 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}
                            onMouseOver={() => setMenu('panel')} onMouseLeave={() => setMenu('')}>
                        <img src={icono_shop} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                            Panel principal
                        </p>
                    </div>
                    <div style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, background: menu === 'productos' ? '#34ad6f' : 'none',
                                borderRadius: 16 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: 204 / proporcional, height: 'auto', cursor: 'pointer', marginTop: 2 / proporcional, 
                                marginBottom: 2 / proporcional}}
                                onMouseOver={() => setMenu('productos')} onMouseLeave={() => setMenu('')}
                                onClick={() => setMenuProductos(!menu_productos)}>
                            <div className='d-flex justify-content-start' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={icono_products} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                    Porudctos
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={menu_productos ? icono_down : icono_right} style={{width: 10 / proporcional, height: 10 / proporcional, margin: 4 / proporcional}}/>
                            </div>
                        </div>
                        {
                            menu_productos ? (
                                <div style={{width: 204 / proporcional, height: 'auto', paddingLeft: 32 / proporcional}}>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'lista-productos' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('lista-productos')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, paddingBottom: 0}}>
                                            Lista
                                        </p>
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'detalles-productos' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('detalles-productos')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Detalles
                                        </p>                    
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, background: menu === 'pedidos' ? '#34ad6f' : 'none',
                                borderRadius: 16 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: 204 / proporcional, height: 'auto', cursor: 'pointer', marginTop: 2 / proporcional, 
                                marginBottom: 2 / proporcional}}
                                onMouseOver={() => setMenu('pedidos')} onMouseLeave={() => setMenu('')}
                                onClick={() => setMenuOrders(!menu_orders)}>
                            <div className='d-flex justify-content-start' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={icono_orders} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                    Pedidos
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={menu_orders ? icono_down : icono_right} style={{width: 10 / proporcional, height: 10 / proporcional, margin: 4 / proporcional}}/>
                            </div>
                        </div>
                        {
                            menu_orders ? (
                                <div style={{width: 204 / proporcional, height: 'auto', paddingLeft: 32 / proporcional}}>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'lista-pedidos' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('lista-pedidos')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, paddingBottom: 0}}>
                                            Lista
                                        </p>
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'detalles-pedidos' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('detalles-pedidos')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Detalles
                                        </p>                    
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, background: menu === 'clientes' ? '#34ad6f' : 'none',
                                borderRadius: 16 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: 204 / proporcional, height: 'auto', cursor: 'pointer', marginTop: 2 / proporcional, 
                                marginBottom: 2 / proporcional}}
                                onMouseOver={() => setMenu('clientes')} onMouseLeave={() => setMenu('')}
                                onClick={() => setMenuCustomers(!menu_customers)}>
                            <div className='d-flex justify-content-start' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={icono_customers} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                    Clientes
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={menu_customers ? icono_down : icono_right} style={{width: 10 / proporcional, height: 10 / proporcional, margin: 4 / proporcional}}/>
                            </div>
                        </div>
                        {
                            menu_customers ? (
                                <div style={{width: 204 / proporcional, height: 'auto', paddingLeft: 32 / proporcional}}>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'lista-clientes' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('lista-clientes')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, paddingBottom: 0}}>
                                            Lista
                                        </p>
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'detalles-clientes' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('detalles-clientes')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Detalles
                                        </p>                    
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, background: menu === 'tienda' ? '#34ad6f' : 'none',
                                borderRadius: 16 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: 204 / proporcional, height: 'auto', cursor: 'pointer', marginTop: 2 / proporcional, 
                                marginBottom: 2 / proporcional}}
                                onMouseOver={() => setMenu('tienda')} onMouseLeave={() => setMenu('')}
                                onClick={() => setMenuStore(!menu_store)}>
                            <div className='d-flex justify-content-start' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={icono_storefronte} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                    Tienda
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 102 / proporcional, height: 'auto'}}>
                                <img src={menu_store ? icono_down : icono_right} style={{width: 10 / proporcional, height: 10 / proporcional, margin: 4 / proporcional}}/>
                            </div>
                        </div>
                        {
                            menu_store ? (
                                <div style={{width: 204 / proporcional, height: 'auto', paddingLeft: 32 / proporcional}}>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-inicio' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-inicio')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, paddingBottom: 0}}>
                                            Inixio
                                        </p>
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-filtros' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-filtros')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Filtros
                                        </p>                    
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-categorias' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-categorias')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Categorías
                                        </p>                    
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-detalles' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-detalles')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Detalles
                                        </p>                    
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-carrito' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-carrito')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Carrito
                                        </p>                    
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-pago' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-pago')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Pago
                                        </p>                    
                                    </div>
                                    <div className='' style={{width: 172 / proporcional, height: 40 / proporcional, cursor: 'pointer', background: sub_menu_opciones === 'tienda-mensajes' ? '#34ad6f' : 'none',
                                            borderRadius: 16 / proporcional, paddingTop: 11 / proporcional, paddingBottom: 11 / proporcional, paddingLeft: 16 / proporcional,
                                            paddingRight: 16 / proporcional}}
                                            onMouseOver={() => setSubMenuOpciones('tienda-mensajes')} onMouseLeave={() => setSubMenuOpciones('')}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                                            Mensajes
                                        </p>                    
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='d-flex' style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, cursor: 'pointer', background: menu === 'envios' ? '#34ad6f' : 'none',
                            borderRadius: 16 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}
                            onMouseOver={() => setMenu('envios')} onMouseLeave={() => setMenu('')}>
                        <img src={icono_shipping} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                            Envíos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, cursor: 'pointer', background: menu === 'descuentos' ? '#34ad6f' : 'none',
                            borderRadius: 16 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}
                            onMouseOver={() => setMenu('descuentos')} onMouseLeave={() => setMenu('')}>
                        <img src={icono_discount} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                            Descuentos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 236 / proporcional, height: 'auto', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, cursor: 'pointer', background: menu === 'settings' ? '#34ad6f' : 'none',
                            borderRadius: 16 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}
                            onMouseOver={() => setMenu('settings')} onMouseLeave={() => setMenu('')}>
                        <img src={icono_settings} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 8 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'white', fontWeight: 400, marginBottom: 0}}>
                            Configuraciones
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}