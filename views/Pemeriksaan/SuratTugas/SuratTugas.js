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




export default function SuratTugas ()  {
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
        <CCol sm="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
               <h4>Form Pembuatan Surat Tugas</h4> 
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
              <CRow>
                <CCol xs="6">
                  
                  <CFormGroup >
                  <CLabel htmlFor="number">Nomor Surat Tugas</CLabel>
                    <CInput id="number" placeholder="Masukkan Nomor Surat Tugas" {...register("SuratTugas",{required:'true'})} />
                  </CFormGroup>
                </CCol>
                <CCol>
                <CFormGroup row>
                  <CCol sm="12">
                    <CLabel htmlFor="date-input">Tanggal Surat Tugas</CLabel>
                  </CCol>
                  <CCol xs="12" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("TanggalSurat",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                  
                </CCol>
            
              </CRow>
              
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
              
              <hr></hr>
              <CFormGroup row>
               
                  <CCol sm="3">
                    <CLabel htmlFor="select">Petugas</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CSelect custom name="select" id="select" {...register("Petugas",{required:'true'})}>
                    <option value=""disabled selected hidden>Pilihan Petugas</option>
                      <option value="1">Dani</option>
                      <option value="2">Didi</option>
                      <option value="3">Joni</option>
                      
                    </CSelect>
                    {/* <div className="form-actions" style={{padding: '5px 5px'}}>
                      <CButton type="submit" href="/login" color="primary">Simpan</CButton>
                    </div> */}
                  </CCol>
                </CFormGroup>
              <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="date-input">Tanggal Pemeriksaan</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("TanggalPemeriksaan",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                  
                  <CRow>
                <CCol sm="12">
                <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="select">Nomor Urut Aset</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CSelect custom name="select" id="select" {...register("NoUrut",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Nomor Urut Aset</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="select">Jenis Aset</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CSelect custom name="select" id="select" {...register("JenisAset",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Jenis Aset</option>
                    <option value="1">Access Point</option>
                      <option value="2">Router</option>
                      <option value="3">Switch</option>
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="select">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CSelect custom name="select" id="select" {...register("TipeAset",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Tipe Aset</option>
                      <option value="1">Asus</option>
                      <option value="2">Hiksvision</option>
                      <option value="3">LG</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="select">Kegunaan Surat Tugas</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CSelect custom name="select" id="select" {...register("Kegunaan",{required:'true'})}>
                    <option value=""disabled selected hidden>Silahkan Pilih Kegunaan Surat Tugas</option>
                      <option value="1">Pemeriksaan Berkala</option>
                      <option value="2">Pengaduan</option>
                      <option value="2">Pemindahan</option>
                      <option value="2">Tindakan Lanjut</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
            
                {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup> */}


                </CCol>
              </CRow>
                    
                  <CFormGroup row>
                  <CCol sm="3">
                    <CLabel htmlFor="textarea-input">Deskripsi Surat Tugas</CLabel>
                  </CCol>
                  <CCol xs="12" sm="9" >
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="5"
                      placeholder="Deskripsikan Keperluan Surat Tugas Pemeriksaan..." 
                      {...register("Deskripsi",{required:'true'})}
                    />
                  </CCol>
                </CFormGroup>
                
   
                    
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
