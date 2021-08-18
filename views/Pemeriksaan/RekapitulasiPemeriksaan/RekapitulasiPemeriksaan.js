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


import PemeriksaanData from '../../users/PemeriksaanData'




const fields = [
  { key: 'NoPemeriksaan', _style: { width: '8%'} },
  { key: 'NoUrutAlat', _style: { width: '8%'} },
  { key: 'NoSuratTugas', _style: { width: '10%'} },
  { key: 'NamaPetugas', _style: { width: '10%'} },
  { key: 'LokasiGedung', _style: { width: '10%'} },
  { key: 'TanggalPemeriksaan', _style: { width: '10%'} },
  { key: 'Kondisi', _style: { width: '10%'} },
  { key: 'Aksi', _style: { width: '20%'} },
 
]


const RekapitulasiPemeriksaaan = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                 <h4> Rekapitulasi Pemeriksaaan</h4>
            </CCardHeader>
            <CCardBody>


      
            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={PemeriksaanData}
              fields={fields}
              hover
              // striped
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

export default RekapitulasiPemeriksaaan
