import React from 'react'
import CIcon from '@coreui/icons-react'



const _nav = [{
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: < CIcon name = "cil-speedometer"
        customClasses = "c-sidebar-nav-icon"/ > ,
        badge: {
            color: 'info',
            
        },
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Master Data',
        route: '/masterdata',
        icon: 'cilPuzzle',
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Jenis aset',
                to: '/masterdata/jenis-aset',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Tipe Aset',
                to: '/masterdata/alat-aset',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Detail aset',
                to: '/masterdata/detail-aset',
            },
          
            {
                _tag: 'CSidebarNavItem',
                name: 'Lokasi',
                to: '/masterdata/lokasi',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Admin',
                to: '/masterdata/Admin',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Data Gudang',
                to: '/masterdata/gudang',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Data Rak',
                to: '/masterdata/rak',
            },
        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Aset',
        route: '/aset',
        icon: 'cil-router',
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Form Penambahan Aset ',
             
                to: '/aset/Penambahan',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Form Pemindahan Aset ',
                to: '/aset/pemindahan',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Akses Status',
                to: '/aset/status',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Pengaduan',
        route: '/Pengaduan',
        icon: 'cilNotes',
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Tambah Pengaduan Baru ',
                to: '/aset/pengaduan-baru',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Tambah Pelaporan',
                to: '/aset/pelaporan',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Akses Rekapitulasi',
                to: '/aset/rekapitulasi',
            },

        ],
    },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Tindakan',
        route: '/Tindakan',
        icon: < CIcon name = "cil-bookmark"
        customClasses = "c-sidebar-nav-icon"/> ,
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Tambah Tindakan Baru ',
                to: '/Tindakan/tindakan-baru',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Tambah Pelaporan',
                to: '/Tindakan/pelaporan',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Akses Rekapitulasi',
                to: '/Tindakan/rekapitulasi',
            },

        ],
    },
     
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Pemeriksaan',
        route: '/Pemeriksaan',
        icon: 'cil-magnifying-glass',
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Buat Surat Tugas ',
                to: '/Pemeriksaan/surat-tugas',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Tambah Pelaporan',
                to: '/Pemeriksaan/pelaporan',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Akses Rekapitulasi',
                to: '/Pemeriksaan/rekapitulasi',
            },

        ],
    },
      
     {
        _tag: 'CSidebarNavDropdown',
        name: 'Peminjaman',
        route: '/peminjaman',
        icon: 'cil-pencil',
        _children: [{
                _tag: 'CSidebarNavItem',
                name: 'Tambah Peminjaman Baru',
                to: '/peminjaman/peminjaman-baru',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Tambah Pengembalian',
                to: '/peminjaman/pelaporan-peminjaman',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Akses Rekapitulasi Peminjaman',
                to: '/peminjaman/rekapitulasi-peminjaman',
            },
        ],
    },
];




export default _nav