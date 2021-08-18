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
  CSwitch
} from '@coreui/react'
import { useForm, Controller } from "react-hook-form";



export default function TambahLokasi  ()  {
  let history = useHistory();
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
  console.log(data);
  swal("Success!", "Berhasil Memasukkan Data", "success")
  // history.push("/masterdata/Admin");
  };
    
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                <h4>Tambah Lokasi</h4>
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
                <CForm  onSubmit={handleSubmit(onSubmit)} action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nama Kampus</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nama Kampus..." autoComplete="Kode Pengadaan" required  {...register("Kampus",{required:'dibutuhkan'})} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                               
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nama Gedung</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nama Gedung..." autoComplete="Kode Pengadaan"  required  {...register("Gedung")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
              
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nomor Lantai</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nomor lantai..." autoComplete="Kode Pengadaan"  required  {...register("Lantai")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nomor Ruangan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nomor Ruangan..." autoComplete="Kode Pengadaan"  required  {...register("Lantai")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Deskripsi</CLabel>
                  </CCol>
                  <CCol xs="10" md="9">
                    <CTextarea 
                    required
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Deskripsikan Pengaduan..." 
                      {...register("Deskripsi")}
                    />
                  </CCol>
                </CFormGroup>
                 
             
              
              
                
              
                    <div className="form-actions" >
                      <CButton type="submit"   color="primary">Tambah</CButton>
                      <CButton color="secondary">Cetak</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}

