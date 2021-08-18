import React from 'react'
import swal from '@sweetalert/with-react';
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


import AlatData from '../../users/AlatData'




const fields = [
  { key: 'NoUrut', _style: { width: '5%'} },
  { key: 'Jenis', _style: { width: '8%'} },
  { key: 'Merk', _style: { width: '8%'} },
  { key: 'Tipe', _style: { width: '8%'} },
  { key: 'Aksi', _style: { width: '30%'} },
 
]

const onClick = () => {
  swal({
    title: "Apakah anda yakin?",
    
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Berhasil! Data yang anda inginkan telah terhapus", {
        icon: "success",
      });
    } else {
      swal("Data ini jadi dihapus");
    }
  });
}

const AlatAset = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Tipe Aset</h4></p>
            </CCardHeader>
            <CCardBody>


            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/alat-aset-tambahalat"   
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Tipe Aset
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
              items={AlatData}
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
                      <CButton type="submit" color="secondary">Ubah</CButton>  <CButton onClick={onClick} color="danger">Hapus</CButton>
                     
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

export default AlatAset
