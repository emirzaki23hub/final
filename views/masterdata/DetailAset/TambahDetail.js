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
import CIcon from '@coreui/icons-react'
import usersData from '../../users/UsersData'
import { DocsLink } from 'src/reusable'
// const fields = ['name','registered', 'role', 'status']
import { useForm, Controller } from "react-hook-form";


const currDate = new Date().toLocaleDateString();
  



export default function TambahDetail  ()  {
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
                <h4> Form Tambah Detail Aset   </h4>
              
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm  onSubmit={handleSubmit(onSubmit)}>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Admin </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select"   {...register("Admin")}>
                  <option  value=""disabled selected hidden>Pilih Admin</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
               
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Urut Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("NoUrut")}>
                      <option value="">Pilih Nomor Urut</option>
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
                    <CSelect custom name="select" id="select"  {...register("JenisAset")}>
                      <option value=""disabled selected hidden>Pilih Jenis Aset</option>
                      <option value="1">Router</option>
                      <option value="2">Switch</option>
                      <option value="3">Access Point</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Merk </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("Merk")}>
                      <option value=""disabled selected hidden>Pilih Merk</option>
                      <option value="1">Cisco</option>
                      <option value="2">Samsung</option>
                      <option value="3">LG</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tipe Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("TipeAset")}>
                      <option  value=""disabled selected hidden>Pilih Tipe Aset</option>
                      <option value="1">WS-C2960X-24TD-L</option>
                      <option value="2">LS19A10/S18A10N</option>
                      <option value="3">CQ3520L</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
        
               
                <hr></hr>
                </CCol>
              </CRow>
              {/* <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Pilih Kampus</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth"  {...register("Kampus")}>
                    <option  value=""disabled selected hidden>Pilih Kampus</option>
                    <option value="1">A UNJ</option>
                      <option value="2">B UNJ</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Pilih Gedung</CLabel>
                  <CSelect   {...register("Gedung")}>
                  <option  value=""disabled selected hidden>Pilih Gedung</option>
                    <option>Gedung Ra. Kartini</option>
                      <option>Gedung Dewi Sartika</option>
                      <option>Gedung FIP</option>
                      <option>Gedung MIPA</option>
                    </CSelect>
                  </CFormGroup>
                  
                </CCol>
            
              </CRow> */}
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
                
                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nomor BMN</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nomor BMN (Optional)..." autoComplete="Kode Pengadaan"  {...register("BMN")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Serial Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Kode Garansi (Optional)..." autoComplete="Kode Pengadaan"  {...register("Serial")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                
                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">IP Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan IP Aset (Optional)..." autoComplete="Kode Pengadaan"  {...register("IP")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}

                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Username Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Username (Optional)..." autoComplete="Kode Pengadaan" {...register("Username")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                
                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="hf-code" name="hf-code" placeholder="Masukkan Password (Optional)..." autoComplete="Kode Pengadaan" {...register("Password")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                {/* <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Kode Usulan Pengadaan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Kode Usulan Pengadaan (Optional)..." autoComplete="Kode Pengadaan" />
                 
                  </CCol>
                </CFormGroup>
                </CForm> */}
                
              
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tahun Pembelian</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">

                    <CSelect custom name="ccyear" id="ccyear" {...register("TahunPembelian")}>
                    <option  value=""disabled selected hidden>Pilih Tahun Pembelian</option>
                    <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>



                {/* <CForm action="" method="post" className="form-horizontal"> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Garansi</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Kode Garansi (Optional)..." autoComplete="Kode Pengadaan"  {...register("Garansi")}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                {/* </CForm> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Kondisi Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" {...register("Status")}>
                    <option  value=""disabled selected hidden>Pilih Kondisi</option>
                      <option value="1">Terpasang</option>
                      <option value="2">Rusak</option>
                      <option value="3">Dimusnahkan</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
             
                
                   <div className="form-actions">
                      <CButton type="submit" color="primary">Simpan</CButton>
                     
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

