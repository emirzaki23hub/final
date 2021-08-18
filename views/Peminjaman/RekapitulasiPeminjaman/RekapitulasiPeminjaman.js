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


import PeminjamanData from '../../users/PeminjamanData'




const fields = [
  { key: 'IdPeminjaman', _style: { width: '3%'} },
  { key: 'NoUrutAlat', _style: { width: '5%'} },
  { key: 'Peminjam', _style: { width: '5%'} },
  { key: 'TanggalPeminjaman', _style: { width: '6%'} },
  // { key: 'KeteranganPeminjaman', _style: { width: '5%'} },
  { key: 'RencanaPengembalian', _style: { width: '7%'} },
  { key: 'Pengembali', _style: { width: '5%'} },
  { key: 'TanggalPengembalian', _style: { width: '6%'} },
  { key: 'Aksi', _style: { width: '15%'} },
 
]


const RekapitulasiPeminjaman = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                 <h4> Rekapitulasi Peminjaman</h4>
            </CCardHeader>
            <CCardBody>


            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={PeminjamanData}
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

export default RekapitulasiPeminjaman
