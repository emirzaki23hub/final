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

export default function TambahAdmin  ()  {
  let history = useHistory();
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const { register, handleSubmit, errors } = useForm();
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
                <h4>Tambah Admin</h4>
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
                    <CLabel htmlFor="hf-email">Nama</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput 
                    required
                    className="name"
                    type="name" 
                    id="name" 
                    name="name" 
                    placeholder="Masukkan Nama Admin" 
                    autoComplete="Nama Admin" 
                    {...register("name",{required:"Dibutuhkan"})}
                    />
                    {/* {errors.name && (
                <small className="text-danger">{errors.name.message}</small>)} */}
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                <CFormGroup row>
               
               <CCol md="3">
                 <CLabel htmlFor="select">Role</CLabel>
               </CCol>
               <CCol xs="12" md="9" >
                 <CSelect custom name="select" id="select" 
                 {...register("role")}>
                   <option  value=""disabled selected hidden>Pilih Role</option>
                   <option value="Admin">Admin</option>
                   <option value="Petugas">Petugas</option>
                   
                   
                 </CSelect>
                 {/* <div className="form-actions" style={{padding: '5px 5px'}}>
                   <CButton type="submit" href="/login" color="primary">Simpan</CButton>
                 </div> */}
               </CCol>
             </CFormGroup>           
             
             
                 
                 
             
              
              
                
              
                    <div className="form-actions" >
                      <CButton type="submit"   color="primary">Tambah</CButton>
                     
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

