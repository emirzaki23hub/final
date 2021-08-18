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

export default function Pemindahan  ()  {
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
                <h4> Form Pemindahan </h4>
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
                    <CLabel htmlFor="select">Nomor  Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" {...register("NomorAset",{required:"Dibutuhkan"})}>
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
                    <CSelect custom name="select" id="select" {...register("JenisAset",{required:"Dibutuhkan"})}>
                      <option value="0">Silahakn Pilih Jenis Aset</option>
                      <option value="1">Router</option>
                      <option value="2">Acces Point</option>
                      <option value="3">Switch</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" {...register("TipeAset",{required:"Dibutuhkan"})} id="select">
                    <option value=""disabled selected hidden> Silahkan Pilih Tipe Aset</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Tanggal Pemindahan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("DateInput",{required:"Dibutuhkan"})} />
                  </CCol>
                </CFormGroup>
                
               
                <CFormGroup row>
               
                  <CCol md="3">
                    <CLabel htmlFor="select">Nama Petugas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" >
                    <CSelect custom name="select" id="select"{...register("Nama Petugas",{required:"Dibutuhkan"})}>
                    <option value=""disabled selected hidden>Pilih Petugas</option>
                      <option value="1">Doni</option>
                      <option value="2">Joni</option>
                      <option value="3">Sami</option>
                      
                    </CSelect>
                    {/* <div className="form-actions" style={{padding: '5px 5px'}}>
                      <CButton type="submit" href="/login" color="primary">Simpan</CButton>
                    </div> */}
                  </CCol>
                </CFormGroup>
                  
                </CCol>
              </CRow>
                     
          
          <br></br>
              <center>Detail Lokasi</center>
              <hr></hr>
              {/* <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Dari Kampus</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet"{...register("Kampus",{required:"Dibutuhkan"})}>
                    <option value=""disabled selected hidden>Pilihan Kampus</option>
                      <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
            
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Dari Gedung</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("Gedung",{required:"Dibutuhkan"})}>
                    <option value=""disabled selected hidden>Pilihan Gedung</option>
                    <option>Gedung Ra. Kartini</option>
                      <option>Gedung Dewi Sartika</option>
                      <option>Gedung FIP</option>
                      <option>Gedung MIPA</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Tujuan Kampus</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("TujuanKampus",{required:"Dibutuhkan"})}>
                    <option value=""disabled selected hidden>Pilihan Kampus</option>
                    <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet"> Tujuan Gedung</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet" {...register("TujuanGedung",{required:"Dibutuhkan"})}>
                    <option>Gedung Ra. Kartini</option>
                      <option>Gedung Dewi Sartika</option>
                      <option>Gedung FIP</option>
                      <option>Gedung MIPA</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
                      
              */}
               <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Dari Kampus</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet"{...register("Kampus")}>
                    <option value=""disabled selected hidden>Pilihan Kampus</option>
                      <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
            
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Dari Gedung</CLabel>
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
                    <CLabel htmlFor="ccalphabet">Dari Lantai</CLabel>
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
                    <CLabel htmlFor="ccalphabet"> Dari Ruangan</CLabel>
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
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Tujuan Kampus</CLabel>
                    <CSelect custom name="ccalphabet" id="ccalphabet"{...register("Kampus")}>
                    <option value=""disabled selected hidden>Pilihan Kampus</option>
                      <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
            
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccalphabet">Tujuan Gedung</CLabel>
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
                    <CLabel htmlFor="ccalphabet">Tujuan Lantai</CLabel>
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
                    <CLabel htmlFor="ccalphabet"> Tujuan Ruangan</CLabel>
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
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Nomor Surat Tugas</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth"{...register("NomorSurat",{required:"Dibutuhkan"})}>
                    <option value=""disabled selected hidden>Pilih Nomor Surat</option>
                      <option value="1">1A</option>
                      <option value="2">1B</option>
                      <option value="3">1C</option>
                      <option value="4">1D</option>
                      <option value="5">1E</option>
                      <option value="6">1F</option>
                      <option value="7">2A</option>
                      <option value="8">2B</option>
                      <option value="9">2C</option>
                      <option value="10">2D</option>
                      <option value="11">2E</option>
                      <option value="12">2F</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                
              
                <CCol xs="6">
                <CFormGroup row>
                  <CCol xs="12">
                    <CLabel htmlFor="date-input">Tanggal Surat Tugas</CLabel>
                  </CCol>
                  <CCol xs="" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("TanggalSurat",{required:"Dibutuhkan"})} />
                  </CCol>
                </CFormGroup>
                  
                </CCol>
           
              </CRow>
              
            <hr></hr>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Tanggal Pemeriksaan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("TanggalPemeriksaan",{required:"Dibutuhkan"})} />
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
                      placeholder="Deskripsikan Pemindahan "
                      {...register("Deksripsi",{required:"Dibutuhkan"})} 
                    />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row></CFormGroup>
                    {/* </CFormGroup> */}
                    <div className="form-actions">
                      <CButton type="submit" style={{marginRight:'10px'}} color="primary">Simpan</CButton>
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

