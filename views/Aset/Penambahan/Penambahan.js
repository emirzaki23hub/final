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
import CIcon from '@coreui/icons-react'


import { useForm, Controller } from "react-hook-form";

export default function Penambahan  ()  {
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
  const currDate = new Date().toLocaleDateString();
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
               <h4>Form Penambahan Aset </h4> 
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
                  <CForm  onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Urut Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"
                    {...register("NoUrut")}>
                      <option  value=""disabled selected hidden>Nomor Urut Aset</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Jenis Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"
                    {...register("JenisAset",{required:"Dibutuhkan"})}>
                      <option value=""disabled selected hidden>Pilih Jenis Aset</option>
                      <option value="Router">Router</option>
                      <option value="Switch">Switch</option>
                      <option value="Access Point">Access Point</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select" >Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"
                    {...register("TipeAset")}>
                      <option value=""disabled selected hidden>Pilih Tipe Aset</option>
                      <option value="Asus">Asus</option>
                      <option value="LG">LG</option>
                      <option value="Hiksion">Hiksvision</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder={currDate} {...register("DateInput")}/>
                  </CCol>
                </CFormGroup>
                  {/* <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter your name" required />
                  </CFormGroup> */}
                    {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Kode Pengadaan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Kode Pengadaan..." autoComplete="Kode Pengadaan" 
                    {...register("KodePengadaan")}
                    />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Garansi</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Garansi..." autoComplete="Kode Pengadaan" {...register("garansi")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
             
                
                <CFormGroup row>
                  <CCol sm="3">
                    <CLabel>Foto Bukti Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInputFile 
                      id="file-multiple-input" 
                      name="file-multiple-input" 
                      type="file"
                      {...register("Foto")}
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Masukkan File/Foto....
                    </CLabel>
                  </CCol>
                </CFormGroup>
                </CCol>
              </CRow>
              
              <center><p>Detail Lokasi</p></center>
              <hr></hr>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Pilih Kampus</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet"{...register("Kampus")}>
                    <option value=""disabled selected hidden>Pilihan Kampus</option>
                      <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
            
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Pilih Gedung</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("Gedung")}>
                    <option value=""disabled selected hidden>Pilihan Gedung</option>
                    <option value="Gedung Ra. Kartini">Gedung Ra. Kartini</option>
                      <option value="Gedung Dewi Sartika">Gedung Dewi Sartika</option>
                      <option>Gedung FIP</option>
                      <option>Gedung MIPA</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Pilih Lantai</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("Lantai")}>
                    <option value=""disabled selected hidden>Pilihan Lantai</option>
                    <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="2">3</option>
                      <option value="2">4</option>
                      <option value="2">5</option>
                      <option value="2">6</option>
                      <option value="2">7</option>
                      <option value="2">8</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet"> Pilih Ruangan</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("Ruangan")}>
                    <option value=""disabled selected hidden>Pilihan Ruangan</option>
                    <option value="101">101</option>
                      <option>Gedung Dewi Sartika</option>
                      <option>Gedung FIP</option>
                      <option>Gedung MIPA</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              <hr></hr>
             
                    {/* <CFormGroup>
                      <CLabel htmlFor="appendedInput">Appended text</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInput" size="16" type="text" />
                          <CInputGroupAppend>
                            <CInputGroupText>.00</CInputGroupText>
                          </CInputGroupAppend>
                        </CInputGroup>
                        <span className="help-block">Here's more help text</span>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedPrependedInput">Append and prepend</CLabel>
                      <div className="controls">
                        <CInputGroup className="input-prepend">
                          <CInputGroupPrepend>
                            <CInputGroupText>$</CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput id="appendedPrependedInput" size="16" type="text" />
                          <CInputGroupAppend>
                            <CInputGroupText>.00</CInputGroupText>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Append with button</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="16" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Go!</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div> */}
                    {/* </CFormGroup> */}
                 
                    {/* <CFormGroup>
                      <CLabel htmlFor="appendedInputButtons">Foto Aset</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButtons" size="10" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Search</CButton>
                            <CButton color="secondary">Options</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup> */}
                    <div className="form-actions">
                      <CButton type="submit" color="primary">Tambah</CButton>
                      {/* <CButton color="secondary">Cetak</CButton> */}
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


