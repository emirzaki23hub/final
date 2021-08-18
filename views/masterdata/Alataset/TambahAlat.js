import React from 'react'
import swal from '@sweetalert/with-react';
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

export default function TambahAlat  ()  {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    swal("Success!", "Behasil Memasukkan Data", "success")
    };
    
  
    
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                <h4>Tambah Alat Aset</h4>
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
                <CForm onSubmit={handleSubmit(onSubmit)}  action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Merk Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="input" id="merk" name="merk" placeholder="Masukkan Merk Baru..." autoComplete="Merk Aset" required
                    {...register("tambahmerk")}
                    />
                    
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="input" id="tipeaset" name="tipeaset" placeholder="Masukkan Tipe Aset Baru..." autoComplete="Merk Aset"  required
                    {...register("tambahtipe")}
                    />
                    
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


