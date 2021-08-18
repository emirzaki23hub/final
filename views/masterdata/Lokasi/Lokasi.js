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


import LokasiData from '../../users/LokasiData'




const fields = [

  
  { key: 'LokasiKampus', _style: { width: '5%'} },
  { key: 'LokasiGedung', _style: { width: '5%'} },
  { key: 'Lantai', _style: { width: '5%'} },
  { key: 'Ruangan', _style: { width: '5%'} },
 
  { key: 'Keterangan', _style: { width: '5%'} },
  { key: 'Aksi', _style: { width: '10%'} },
 
]


const Lokasi = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Lokasi</h4></p>
            </CCardHeader>
            <CCardBody>


            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/lokasi-tambahlokasi"   
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Data Lokasi
                            </CLink>
                        {/* <CButton color="primary" className="px-4">Login</CButton> */}
                      </CCol>
            <br>
            </br>
            <br></br>
            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={LokasiData}
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

export default Lokasi
