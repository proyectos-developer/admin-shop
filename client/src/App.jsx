import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import GlobalDashboard from './components/dashboard/panel.jsx'
import GlobalDashboardTablet from './components/dashboard/paneltablet.jsx'
import GlobalDashboardCell from './components/dashboard/panelcell.jsx'

import Dashboard from './components/dashboard/dashboard.jsx'
import DashboardTablet from './components/dashboard/dashboardtablet.jsx'
import DashboardCell from './components/dashboard/dashboardcell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <GlobalPanelCell   proporcional={499 / width}/> : 
                                     width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> : 
                                                   <GlobalPanel       proporcional={1920 / width} />}>
                <Route path='' element={width < 500 ? <GlobalDashboardCell   proporcional={499 / width}/> : 
                                      width < 991 ? <GlobalDashboardTablet proporcional={991 / width}/> : 
                                                    <GlobalDashboard       proporcional={1920 / width} />}>
                    <Route index element={width < 500 ? <DashboardCell   proporcional={499 / width}/> : 
                                            width < 991 ? <DashboardTablet proporcional={991 / width}/> : 
                                                          <Dashboard       proporcional={1920 / width} />}/>
                </Route>
                                                    
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
