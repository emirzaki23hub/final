import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  
  CCardGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import MainChartExample from '../charts/MainChartExample.js'
import MainChart from '../charts/MainChart.js'
import dashboard from './dashboard.css'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))



const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <> <CRow>
    <CCol xs="12" sm="6" lg="3">
  
      <CWidgetProgressIcon  style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'bolder',padding:'auto',backgroundColor: '#B4D6C1'}}  value={100} header="50" text="Total Router" footer=""  > 
      <CIcon width={30} paddingRight={0} name="cil-router" className="icon icon-xl" />
      </CWidgetProgressIcon>
    </CCol>
    <CCol xs="12" sm="6" lg="3">
  
  <CWidgetProgressIcon style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'10',padding:'auto',backgroundColor:' #F4EDE3'}} color="success" value={100} header="100" text="Total Komputer" footer=""  > 
  <CIcon width={30} paddingRight={0} name="cil-devices" className="icon icon-xl" />
  </CWidgetProgressIcon>
</CCol>
<CCol xs="12" sm="6" lg="3">
  
      <CWidgetProgressIcon style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'10',padding:'auto',backgroundColor:'#FAFBF6'}} color="info" value={100} header="5" text="Jumlah Admin" footer=""  > 
      <CIcon width={30} paddingRight={0} name="cil-voice-over-record" className="icon icon-xl" />
      </CWidgetProgressIcon>
    </CCol>
    <CCol xs="12" sm="6" lg="3">
  
      <CWidgetProgressIcon style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'10',padding:'auto',backgroundColor:'#D4F0F0'}} color="warning" value={100} header="10" text="Jumlah Petugas" footer=""  > 
      <CIcon width={30} paddingRight={0} name="cil-user" className="icon icon-xl" />
      </CWidgetProgressIcon>
    </CCol>


   </CRow>

      {/* <WidgetsDropdown /> */}
      <CCard>
        
        <CCardBody style={{backgroundColor:'#FAFBF6'}} >
        <h5><strong>Grafik  Pengaduan dan Tindakan  Aset UPT TIK</strong></h5>  
          <hr></hr> 
        <CRow>
          <CCol m="5">
               <MainChartExample style={{height: '200px', marginTop: '0px'}}/></CCol>
          </CRow>
          <hr></hr>
          <h5><strong>Grafik Akumulasi Pengaduan dan Tindakan  Aset UPT TIK</strong></h5>  
          <hr></hr>
          <CRow>
          <CCol m="5">
               <MainChart style={{height: '200px', marginTop: '0px'}}/></CCol>
          </CRow>
          <hr></hr>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              
              
              <strong>Pengaduan </strong>
              <CProgress thin className="mt-2" precision={5} color="warning" value={100} />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              
              <strong>Tindakan</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={100} />
            </CCol>
        
          </CRow>
        </CCardBody>
        
        
      </CCard>
     
      <CCardGroup columns className = "cols-2"  > 
      <CCard>
        <CCardHeader  sm="5" style={{backgroundColor:'#FAFBF6'}} >
        <h5>Pie Chart Access Point  </h5>  
        </CCardHeader>
       
                  <CCardBody  sm="5" style={{backgroundColor:'#F7F8D6'}}  >
                  <CCol md="11" >
          <CChartPie xs="12" style={{height:'300px'}}
        
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [62.5, 25, 12.5]
              }
            ]}
            labels={['Terpasang',  'Gudang', 'Rusak']}
            options={{
             
              maintainAspectRatio: false,
              tooltips: {
                enabled: true
              }
            }}
          />
          </CCol>
          
          <hr></hr>
          <p>Keterangan:</p>
          
          <CRow className="text-center"  style={{fontSize:'13px'}} >
          <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>80 Jumlah </strong>
              <CProgress thin className="mt-2" precision={1} color="white" value={100} />
            </CCol>
          <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>50 Digunakan </strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={63} />
            </CCol>
            <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>20 Gudang</strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={25} />
            </CCol>
            <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>10 Rusak</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={13} />
            </CCol>
        
          </CRow>
        </CCardBody>
        
       
      </CCard>
      
      <CCard>
        <CCardHeader  sm="5" style={{backgroundColor:'#FAFBF6'}}>
        <h5>Pie Chart User SIM-ASET UPT TIK  </h5>  
        </CCardHeader>
       
                  <CCardBody  sm="5" style={{backgroundColor:'#F7F8D6'}} >
                  <CCol md="11" >
          <CChartPie xs="12" style={{height:'300px'}}
        
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#321fdb',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [66.7, 33.3]
              }
            ]}
            labels={['Admin', 'Petugas']}
            options={{
              maintainAspectRatio: false,
              tooltips: {
                enabled: true
              }
            }}
          />
          </CCol>
          <hr></hr>
          <p>Keterangan:</p>
          
          <CRow className="text-center" style={{fontSize:'13px'}}>
          <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>30 User </strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={100} />
            </CCol>
            <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>20 Petugas </strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={66.7} />
            </CCol>
            <CCol md sm="12" md="6" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis"></div>
              <strong>10 Admin</strong>
              <CProgress thin className="mt-2" precision={1} color=" '#E46651" value={33.3} />
            </CCol>
        
          </CRow>
        </CCardBody>
      </CCard>
      </CCardGroup>
   
      <br></br>
      <br></br>
            

     
    </>
  )
}

export default Dashboard
