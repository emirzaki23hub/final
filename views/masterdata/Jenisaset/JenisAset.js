import React from 'react'
import swal from '@sweetalert/with-react';

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



import JenisData from '../../users/JenisData'



const fields = [
  { key: 'NomorUrut', _style: { width: '5%'} },
  { key: 'JenisAset', _style: { width: '10%'} },
  { key: 'Aksi', _style: { width: '40%'} },
 
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
      swal("Data ini tidak jadi dihapus!");
    }
  });
}

const JenisAset = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Data Jenis    Aset</h4></p>
            </CCardHeader>
            <CCardBody>


            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/jenis-aset-tambahjenis"   
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Jenis Aset
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
              items={JenisData}
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
                      <CButton type="submit" style={{borderColor:'black',Color:'black'}} color="secondary" href="/masterdata/jenis-aset-ubahjenis" ><small style={{fontSize:'14px', color:'black'}}>Ubah</small></CButton> 
                       <CButton style={{marginLeft:'5px',borderColor:'black'}} onClick={onClick}  color="danger"> Hapus</CButton>
                     
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

export default JenisAset
