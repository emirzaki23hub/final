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


import TindakanData from '../../users/TindakanData'




const fields = [
    { key: 'IdTindakan', _style: { width: '5%'} },
    { key: 'NoPengaduan', _style: { width: '5%'} },
    { key: 'Petugas', _style: { width: '5%'} },

  { key: 'SuratTugas', _style: { width: '5%'} },
  { key: 'TanggalTindakan', _style: { width: '5%'} },
  { key: 'Kondisi', _style: { width: '5%'} },
  { key: 'Aksi', _style: { width: '15%'} },
 
]


const RekapitulasiTindakan = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                 <h4> Rekapitulasi Tindakan</h4>
            </CCardHeader>
            <CCardBody>


            <CDataTable
            itemsPerPageSelect
            itemsPerPage="5"
              // columnFilter
              tableFilter
              items={TindakanData}
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

export default RekapitulasiTindakan
