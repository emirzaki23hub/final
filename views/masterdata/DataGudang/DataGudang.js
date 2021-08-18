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


import GudangData from '../../users/GudangData'




const fields = [
  { key: 'NoGudang', _style: { width: '2%'} },
  { key: 'LokasiGudang', _style: { width: '2%'} },
 
  { key: 'Aksi', _style: { width: '10%'} },
 
]


const DataGudang = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Gudang</h4></p>
            </CCardHeader>

            
            <CCardBody>

            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/gudang-tambahgudang"    
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Data Gudang
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
              items={GudangData}
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

export default DataGudang
