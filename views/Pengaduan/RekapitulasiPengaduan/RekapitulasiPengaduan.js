import React from 'react'
// import TambahAlat from './views/masterdata/Alataset/TambahAlat';
import {
 
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton,
  tableFilter,
  columnFilter,
  
} from '@coreui/react'


import PengaduanData from '../../users/PengaduanData'




const fields = [
  
 
  { key: 'NomorPengaduan', _style: { width: '10%'} },
  { key: 'Pengadu', _style: { width: '10%'} },
  { key: 'TanggalPengaduan', _style: { width: '10%'} },
  { key: 'LokasiKampus', _style: { width: '10%'} },
  { key: 'LokasiGedung', _style: { width: '10%'} },
  { key: 'Deskripsi', _style: { width: '10%'} },
  { key: 'Aksi', _style: { width: '20%'} },
 
]


const RekapitulasiPengaduan = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                 <h4> Rekapitulasi Pengaduan</h4>
            </CCardHeader>
            <CCardBody>


            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={PengaduanData}
              fields={fields}
              hover
              striped
              bordered
              sorter
              size="s"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Aksi':
                  (item)=>(
                    <td>
                      
          
                     
                     <div className="form-actions">
                      <CButton type="submit" color="secondary">Ubah</CButton>  <CButton color="danger">Hapus</CButton>
                     
                    </div>
                    </td>
                    
                  )
              }}
              
              
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default RekapitulasiPengaduan
