import React from 'react'
import swal from '@sweetalert/with-react';
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
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

export default function TambahRak ()  {
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
                <h4>Tambah Data Rak</h4>
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
                <CForm action="" onSubmit={handleSubmit(onSubmit)} method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Gudang</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("NoGudang",{required:'true'})}>
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>   


                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nomor Rak</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nomor Rak..." autoComplete="Kode Pengadaan" {...register("NoRak")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
            
            
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Kapasistas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan kapasitas rak (ℓ)..." autoComplete="Kode Pengadaan" {...register("Kapasitas")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
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


