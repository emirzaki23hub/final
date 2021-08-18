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
import CIcon from '@coreui/icons-react'
import { reset } from 'enzyme/build/configuration';



export default function PengaduanBaru ()  {
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
                <h4> Form Pengaduan  </h4>
              
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm action="" onSubmit={handleSubmit(onSubmit)} method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nama Pengadu</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nama Pengadu..." autoComplete="Kode Pengadaan" required {...register("NamaPengadu",{required:'true'})} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
              
            
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Kontak Pengadu</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Kontak Pengadu..." autoComplete="Kode Pengadaan"  required {...register("KontakPengadu",{required:'true'})}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Tanggal Pengaduan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date"  {...register("TanggalPengaduan",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Urut Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("NoUrut",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Nomor Urut Aset</option>
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
                    <CSelect custom name="select" id="select" {...register("JenisAset",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Jenis Aset </option>
                      <option value="1">Router</option>
                      <option value="2">Switch</option>
                      <option value="3">Access Point</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" {...register("TipeAset",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Tipe Aset</option>
                      <option value="1">Asus</option>
                      <option value="2">LG</option>
                      <option value="3">Hiksvision</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
               
                
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabledSelect">Petugas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect  {...register("Petugas",{required:'true'})}
                   
                    >
                     <option value=""disabled selected hidden>Silahkan Pilih Petugas</option>
                      <option value="1">Doni</option>
                      <option value="2">Joni</option>
                      <option value="3">Sami</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                  
                </CCol>
              </CRow>
                     

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
                    <CLabel htmlFor="ccalphabet"> Pilih  Ruangan</CLabel>
                    <CSelect  {...register("Ruangan")}>
                    <option value=""disabled selected hidden>Pilihan Ruangan</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="201">201</option>
                    <option value="202">102</option>
                    <option value="301">301</option>
                    <option value="302">302</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="">Masukkan Surat Pengantar</CLabel>
                    <CInput custom name="" id="" placeholder="Masukkan Nomor Surat Pengantar" {...register("NomorSurat",{required:'true'})}>
                    {/* <option value=""disabled selected hidden>Silahkan Pilih Nomor Surat</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  */}
                    </CInput>
                  </CFormGroup>
                </CCol>
                
             
              
                <CCol xs="6">
                <CFormGroup row>
                  <CCol xs="12">
                    <CLabel htmlFor="date-input">Tanggal Surat Pengantar</CLabel>
                  </CCol>
                  <CCol xs="12" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date"  {...register("TanggalSurat",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                  
                </CCol>
           
              </CRow>
              
            <hr></hr>
              {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Tanggal Pemeriksaan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup> */}
      
              
              
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Deskripsi</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      {...register("Deskripsi",{required:'true'})}
                      placeholder="Deskripsikan Pengaduan..." 
                    />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row></CFormGroup>
                    {/* </CFormGroup> */}
                    <div className="form-actions">
                      <CButton type="submit" color="primary">Tambahkan</CButton>
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

