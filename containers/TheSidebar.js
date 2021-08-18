import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import logos from "../assets/icons/d.png";

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar style={{ backgroundColor: 		'#292929' }}
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      
     <center><h4   >SIMASET UPT TIK UNJ </h4> </center>
    <br></br>
     
      
     {/* #438eb9; biru tua
     #f8f8f8  abu-abu*/}
     
      
       <CSidebarBrand className="d-md-down-none" href="http://pustikom.unj.ac.id/ "style={{ backgroundColor:'#393939' }}  >
        <CIcon
          className="c-sidebar-brand-full"
          name="logos"
          src={logos}
          height={100}
  
        />
      
    
      
      </CSidebarBrand>
      <hr></hr>
     
      <CSidebarNav style={{ backgroundColor: 		'	 #292929' }}  >
      <center><p >Muhammad Emirzaki - Admin</p></center>  

        <CCreateElement
        
        style={{ backgroundColor: 		'	#292929' }}
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none"  /> */}
      {/* <CSidebarMinimizer className="c-d-md-down-none" style={{ backgroundColor: '#ebedef' }} /> */}
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
