import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <div >
        <CWidgetDropdown
        style={{fontSize:'15px'}}
          color="gradient-primary"
          header="100"
          text="Total Acces Point"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[]}
              pointHoverBackgroundColor="primary"
              label="Access Point"
            
            />
            
          }
        >

          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
        </div>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="50"
          text="Total Komputer"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              dataPoints={[]}
              style={{height: '70px'}}
           
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="10"
          text="Total Admin "
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Admin"
              labels="months"
            />
          }
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="20"
          text="Total Petugas"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[]}
              backgroundColor="rgb(250, 152, 152)"
              label="Petugas"
              
            />
          }
        >
        
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
