import React from 'react'

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


import RakData from '../../users/RakData'




const fields = [
  { key: 'NoGudang', _style: { width: '2%'} },
  { key: 'NoRak', _style: { width: '2%'} },
  { key: 'Kapasitas', _style: { width: '2%'} } ,
 
  { key: 'Aksi', _style: { width: '10%'} },
 
]


const DataRak = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Rak</h4></p>
            </CCardHeader>
            <CCardBody>
            
            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/rak-tambahrak"    
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Data Rak
                            </CLink>
                   
                      </CCol>
            <br>
            </br>
            <br></br>

          
            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={RakData}
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

export default DataRak
