import React from 'react'
import swal from '@sweetalert/with-react';
import { useHistory } from "react-router-dom";
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


import DetailData from '../../users/DetailData'




const fields = [
  { key: 'NoUrutAlat', _style: { width: '8%'} },
  { key: 'NoSeriBMN', _style: { width: '8%'} },
  { key: 'Jenis', _style: { width: '10%'} },
  { key: 'Merk', _style: { width: '10%'} },
  { key: 'Tipe', _style: { width: '10%'} },
  { key: 'LokasiKampus', _style: { width: '10%'} },
  { key: 'LokasiGedung', _style: { width: '10%'} },
  { key: 'Garansi', _style: { width: '10%'} },
  { key: 'Aksi', _style: { width: '20%'} },
 
]




const DetailAset = () => {
  let history = useHistory();
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
        history.push("/masterdata/detail-aset");
      } else {
        swal("Data ini jadi dihapus");
      }
    });
  }
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                <p> <h4> Tambah Detail Aset</h4></p>
            </CCardHeader>
            <CCardBody>


            <CCol xs="6">
                      <CLink className="c-subheader-nav-link btn btn-ghost-primary active" href="/masterdata/detail-aset-tambahdetail"   
                      style={{backgroundColor: '',alignSelf:'flex-end',position:'absolute',bottom:'10',left:'0' ,right:'' }}> 
                            Tambah Detail Aset
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
              items={DetailData}
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

export default DetailAset
