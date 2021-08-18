import React from 'react'
import swal from '@sweetalert/with-react';
import { useHistory } from "react-router-dom";
import {
  CContainer,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CBadge,
  CDataTable
} from '@coreui/react'
import { useForm, Controller } from "react-hook-form";

import usersData from '../../users/UsersData'
import { DocsLink } from 'src/reusable'
const fields = ['NoUrutAlat','JenisAset', 'Jumlah', 'Aksi']




const currDate = new Date().toLocaleDateString();
  

export default function PelaporanPeminjaman ()  {
  let history = useHistory();
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    swal("Apakah anda yakin data yang anda masukkan sudah sesuai?", {
      buttons: {
        cancel: "Batalkan!",
       
        Konfirmasi: true,
      },
    })
    .then((value) => {
      switch (value) {
     
        case "Konfirmasi":
          swal("Data berhasil ditambahkan !, success");
          break;
     
       case "Batalkan":
         break;
      
      }
    });
    // history.push("/masterdata/jenis-aset");
    };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                <h4> Form Pengembalian  </h4>
                {/* <div className="card-header-actions">
                  <CButton color="link" className="card-header-action btn-setting">
                    <CIcon name="cil-settings" />
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-minimize" 
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <CIcon name={ collapsed ? "cil-arrow-top" : "cil-arrow-bottom"} />
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-close" 
                    onClick={() => setShowElements(false)}
                  >
                    <CIcon name="cil-x" />
                  </CButton>
                </div> */}
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)}>
             <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Tanggal Pengembalian</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="" name="Tanggal-Pengembalian" placeholder={currDate}  {...register("Tanggalaset", { required:'true'
                    })}  />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Admin Pengembali</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="disabled-input" name="disabled-input" placeholder="Muhammad Emirzaki" {...register("AdminPengembali",
                    )} />
                  </CCol>
                </CFormGroup>
              
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nama Pengembali</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nama Pengembali..." autoComplete="Kode Pengadaan" required  {...register("NamaPengembali", { required:'Dibutuhkan'
                    })} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                
                
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Id Peminjaman</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" {...register("IdPeminjaman",
                    )}>
                      <option value="0">Please select</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
             
               
               
               
                
                </CCol>
              </CRow>
              
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Status Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="tuliskan status pengembalian aset" autoComplete="Kode Pengadaan" {...register("StatusAset",
                    )} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                    
          
          
              
           
              
          
            
              
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Deskripsi</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="5"
                      placeholder="Deskripsikan Keperluan Peminjaman..." 
                    />
                  </CCol>
                </CFormGroup>
                <CButton type="submit" color="primary">Input Transaksi</CButton>
                <br></br>
                <br></br>
                </CForm>  
             
          <CRow>
        <CCol xs="12" md="0">
          <CCard>
            <CCardHeader>
          <center> <h5>Daftar Barang Peminjaman</h5></center> 
             
            </CCardHeader>
            <CCardBody>
              
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              hover
      
              scopedSlots = {{
                'Aksi':
                  (item)=>(
                    <td>
                      
          
                     
                     <div className="form-actions">
                       <CButton color="danger">Hapus</CButton>
                     
                    </div>
                    </td>
                    
                  )

              }}
                 />
                 </CCardBody>
          </CCard>
        </CCol>
</CRow>

                    <div className="form-actions">
                      <CButton type="submit" color="primary">Kembalikan</CButton>
                      <CButton color="secondary">Cetak</CButton>
                    </div>
                  
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}

