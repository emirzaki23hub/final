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
  CDataTable,
  hover
} from '@coreui/react'
import { useForm, Controller } from "react-hook-form";
import usersData from '../../users/UsersData'
import { DocsLink } from 'src/reusable'
const fields = ['NoUrutAlat','JenisAset', 'Jumlah', 'Aksi']



const currDate = new Date().toLocaleDateString();
  

export default function PeminjamanBaru  ()  {
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
                <h4> Form Peminjam   </h4>
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
                  <CForm  onSubmit={handleSubmit(onSubmit)}>
                  <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nama Admin</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select"  {...register("Nama Admin",{required:'true'})}>
                    <option value="Muhammad Emirzaki"disabled selected hidden>Muhammad Emirzaki</option>
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>   
           
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Nama Peminjam</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Nama Peminjam..." autoComplete="Kode Pengadaan"  required {...register("Nama Peminjam",{required:'true'})}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">Unit/Vendor</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="code" id="hf-code" name="hf-code" placeholder="Masukkan Unit/Vendor..." autoComplete="Kode Pengadaan" {...register("Unit")} />
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                
                 
                  <CRow>
                <CCol xs="12">
                <CFormGroup row>
                  <CCol lg="3">
                    <CLabel htmlFor="select">Nomor Urut Aset</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" {...register("NoUrutAset",{required:'true'})}>
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
                    <option value=""disabled selected hidden>Silahkan Pilih Jenis Aset</option>
                      <option value="1">Router</option>
                      <option value="2">Access Point</option>
                      <option value="3">Switch</option>
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
                      <option value="WS-C2960X-24TD-L">WS-C2960X-24TD-L</option>
                      <option value="LS19A10/S18A10N">LS19A10/S18A10N</option>
                      <option value="CQ3520L">CQ3520L</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
               
               
               
                  
                </CCol>
              </CRow> 
              <CFormGroup row>
               
               <CCol md="3">
                 <CLabel htmlFor="select">Kondisi Aset</CLabel>
               </CCol>
               <CCol xs="12" md="9" >
                 <CSelect custom name="select" id="select" {...register("KondisiAset",{required:'true'})}>
                 <option value=""disabled selected hidden>Kondisi Aset</option>
                   <option value="1">Lengkap</option>
                   <option value="2">Tidak Lengkap</option>
                   <option value="3">Rusak</option>
                   <option value="4">Dimusnahkan</option>
                   
                   
                 </CSelect>
                 {/* <div className="form-actions" style={{padding: '5px 5px'}}>
                   <CButton type="submit" href="/login" color="primary">Simpan</CButton>
                 </div> */}
               </CCol>
             </CFormGroup>                     
          
            <hr></hr>
              
                                  
              <CRow>
                <CCol >
                <CFormGroup row>
                  <CCol xs="12">
                    <CLabel htmlFor="date-input">Tanggal Peminjaman Aset</CLabel>
                  </CCol>
                  <CCol xs="12" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("Tanggal Meminjam",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                </CCol>
                
              
                <CCol xs="">
                <CFormGroup row>
                  <CCol xs="12">
                    <CLabel htmlFor="date-input">Tanggal Pengembalian </CLabel>
                  </CCol>
                  <CCol xs="12" sm="12" >
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" {...register("RencanaKembali",{required:'true'})} />
                  </CCol>
                </CFormGroup>
                  
                </CCol>
           
              </CRow>
              
            <hr></hr>
            
              
                  <CFormGroup row>
                  <CCol xs="12" sm="12" >
                    <CLabel htmlFor="textarea-input">Deskripsi</CLabel>
                  </CCol>
                  <CCol xs="12" >
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="5"
                      placeholder="Deskripsikan Keperluan Peminjaman..." 
                      {...register("Deskripsi",{required:'true'})}
                    />
                  </CCol>
                </CFormGroup>
                <CButton type="submit" color="primary">Input Transaksi</CButton>
                <hr></hr>
                
                </CForm>
                <CRow>
        <CCol xs="12" md="0">
          <CCard>
            <CCardHeader>
          <center> <h5>Daftar Barang Peminjaman</h5></center> 
             
            </CCardHeader>
            <CCardBody>
              
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              hover
      
              scopedSlots = {{
                'Aksi':
                  (item)=>(
                    <td>
                      
          
                     
                     <div className="form-actions">
                       <CButton color="danger">Hapus</CButton>
                     
                    </div>
                    </td>
                    
                  )

              }}
                 />
                 </CCardBody>
          </CCard>
        </CCol>
</CRow>


                    <div className="form-actions">
                      <CButton type="submit" style={{marginRight:'5px'}} color="primary">Tambah Peminjaman</CButton>
                      <CButton color="secondary">Cetak</CButton>
                    </div>
                  
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}


