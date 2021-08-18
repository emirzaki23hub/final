import React from 'react'
// import TambahAlat from './views/masterdata/Alataset/TambahAlat';
import {
 
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton,
  tableFilter,
  columnFilter,
  
} from '@coreui/react'


import StatusData from '../../users/StatusData'




const fields = [
  { key: 'NoUrutAlat', _style: { width: '5%'} },
  { key: 'LokasiKampus', _style: { width: '10%'} },
  { key: 'LokasiGedung', _style: { width: '10%'} },
  { key: 'Status', _style: { width: '10%'} },
  // { key: 'Foto', _style: { width: '10%'} },
  // { key: 'Keterangan', _style: { width: '10%'} },
  { key: 'Aksi', _style: { width: '10%'} },
 
]


const Status = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Status Aset</h4></p>
            </CCardHeader>
            <CCardBody>


         
         
            
            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={StatusData}
              fields={fields}
              hover
              striped
              bordered
              sorter
              size="s"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Aksi':
                  (item)=>(
                    <td>
                      
          
                     
                     <div className="form-actions">
                      <CButton type="submit" color="secondary">Ubah</CButton>  <CButton color="danger">Hapus</CButton>
                     
                    </div>
                    </td>
                    
                  )
              }}
              
              
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Status
