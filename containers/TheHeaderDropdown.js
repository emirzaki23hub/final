import React from 'react'
import {
  CDropdown,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      
      <CLink className="c-subheader-nav-link btn btn-success" href="/login"  style={{backgroundColor: '#fab702', borderColor:'#292929'}}> 
      <CIcon name="cil-x-circle" style={{color: '#000000'}} alt="Settings"/>      <small   style={{color: '#000000',fontSize:'13px'} }>  Keluar</small> 
                      </CLink>
    </CDropdown>
  )
}

export default TheHeaderDropdown
