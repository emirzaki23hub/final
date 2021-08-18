import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive' 
    dispatch({type: 'set', sidebarShow: val}) 
  }
  
  const toggleSidebarMobile  = () => { 
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})  
  }

  return (
    <CHeader withSubheader style={{backgroundColor: ' #292929'}}>
      <CToggler style={{backgroundColor: ' #438eb9'}}
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
        
      />
      <CToggler style={{backgroundColor: ' #393939', height:'0 px'}}
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
      <h5> <p className="text-white">SIMASET UPT TIK UNJ</p></h5>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        {/* <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown/>
      </CHeaderNav>

      <CSubheader style={{backgroundColor: '#fab702'}}>
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />         
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
