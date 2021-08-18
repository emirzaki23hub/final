import React from 'react'
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

import swal from '@sweetalert/with-react';
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
  


export default function TindakanBaru  ()  {
  let history = useHistory();
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const { register, handleSubmit, errors} = useForm();
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
                <h4> Form Tindakan Baru  </h4>
              
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
              
                  <CForm  onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Pengaduan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("Nomor Pengaduan")}>
                    <option value=""disabled selected hidden>Pilih Nomor Pengaduan</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
                

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Surat Tugas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect name="SuratTugas" type="SuratTugas"  {...register("SuratTugas",{required:'true', message:'Tidak Boleh Kosong'})}>
                    <option value=""disabled selected hidden>Pilih Surat Tugas</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </CSelect>
                  </CCol>
                   
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Tanggal Tindakan</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date"  {...register("Tanggal Tindakan",{required:'true'})}/>
                  </CCol>
                </CFormGroup>
              
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabledSelect">Petugas</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect 
                     {...register("Petugas",{required:'true'})}
                    >
                      <option value="0">Pilihan Petugas</option>
                      <option value="1">Bani</option>
                      <option value="2">Charles</option>
                      <option value="3">Joni</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
            
              

               
               
               
                </CCol>
              </CRow>
              <CFormGroup row>
               
               <CCol md="3">
                 <CLabel htmlFor="select">Kondisi Tindakan</CLabel>
               </CCol>
               <CCol xs="9" >
                 <CSelect custom name="select" id="select"  {...register("Kondisi",{required:'true'})}>
                 <option value=""disabled selected hidden>Kondisi Aset</option>
                   <option value="1">Terpasang</option>
                   <option value="2">Rusak</option>
                   
                 </CSelect>
                 {/* <div className="form-actions" style={{padding: '5px 5px'}}>
                   <CButton type="submit" href="/login" color="primary">Simpan</CButton>
                 </div> */}
               </CCol>
             </CFormGroup>                     
             {/* <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">File Scan Surat Tugas</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"  {...register("File")}/>
                  </CCol>
                </CFormGroup> */}
               
    
             
       
            
              
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Deskripsi</CLabel>
                  </CCol>
                  <CCol xs="10" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Deskripsikan Tindakan..." 
                      {...register("Deskripsi",{required:'true'})}
                    />
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Foto Bukti Aset</CLabel>
                  </CCol>
                  <CCol xs="8" md="">
                    <CInputFile 
                    
                     type="photo"
                      id="file-multiple-input" 
                      name="file-multiple-input" 
                      {...register("Foto")}
                     
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
             */}
      
                    <div className="form-actions">
                      <CButton type="submit" color="primary">Tambah Tindakan</CButton>
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


