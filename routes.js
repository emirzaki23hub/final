import React from 'react';


import jenisaset from './views/masterdata/Jenisaset/JenisAset';
import Rekapitulasi from './views/Pengaduan/RekapitulasiPengaduan/RekapitulasiPengaduan';

const Toaster = React.lazy(() =>
    import ('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() =>
    import ('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() =>
    import ('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() =>
    import ('./views/base/cards/Cards'));
const Carousels = React.lazy(() =>
    import ('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() =>
    import ('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() =>
    import ('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() =>
    import ('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() =>
    import ('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() =>
    import ('./views/base/navbars/Navbars'));
const Navs = React.lazy(() =>
    import ('./views/base/navs/Navs'));
const Paginations = React.lazy(() =>
    import ('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() =>
    import ('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() =>
    import ('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() =>
    import ('./views/base/switches/Switches'));

const Tabs = React.lazy(() =>
    import ('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() =>
    import ('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() =>
    import ('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() =>
    import ('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() =>
    import ('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() =>
    import ('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() =>
    import ('./views/charts/Charts'));
const Dashboard = React.lazy(() =>
    import ('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() =>
    import ('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() =>
    import ('./views/icons/flags/Flags'));
const Brands = React.lazy(() =>
    import ('./views/icons/brands/Brands'));
const Alerts = React.lazy(() =>
    import ('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() =>
    import ('./views/notifications/badges/Badges'));
const Modals = React.lazy(() =>
    import ('./views/notifications/modals/Modals'));
const Colors = React.lazy(() =>
    import ('./views/theme/colors/Colors'));
const Typography = React.lazy(() =>
    import ('./views/theme/typography/Typography'));
const Widgets = React.lazy(() =>
    import ('./views/widgets/Widgets'));
    const Users = React.lazy(() =>
    import ('./views/users/Users'));
    const User = React.lazy(() =>
    import ('./views/users/User'));
    const Admins = React.lazy(() =>
    import ('./views/masterdata/Admins/Admins'));
    const TambahAdmin = React.lazy(() =>
    import ('./views/masterdata/Admins/TambahAdmin'));

    const AlatAset = React.lazy(() =>
    import ('./views/masterdata/Alataset/AlatAset'));
    const TambahAlat = React.lazy(() =>
    import ('./views/masterdata/Alataset/TambahAlat'));
  
    const JenisAset = React.lazy(() =>
    import ('./views/masterdata/Jenisaset/JenisAset'));
    const TambahJenis = React.lazy(() =>
    import ('./views/masterdata/Jenisaset/TambahJenis'));
    const Lokasi = React.lazy(() =>
    import ('./views/masterdata/Lokasi/Lokasi'));
    const UbahJenis = React.lazy(() =>
    import ('./views/masterdata/Jenisaset/UbahJenis'));
   
    const DataGudang = React.lazy(() =>
    import ('./views/masterdata/DataGudang/DataGudang'));
    const TambahGudang = React.lazy(() =>
    import('./views/masterdata/DataGudang/TambahGudang'));

    const DataRak = React.lazy(() =>
    import ('./views/masterdata/DataRak/DataRak'));
    const TambahRak = React.lazy(() =>
    import('./views/masterdata/DataRak/TambahRak'));


    const TindakanBaru = React.lazy(() =>
    import ('./views/Tindakan/TindakanBaru/TindakanBaru'));
    const PelaporanTindakan = React.lazy(() =>
    import ('./views/Tindakan/PelaporanTindakan/PelaporanTindakan'));
    const RekapitulasiTindakan = React.lazy(() =>
    import ('./views/Tindakan/RekapitulasiTindakan/RekapitulasiTindakan'));

    const TambahLokasi = React.lazy(() =>
    import ('./views/masterdata/Lokasi/TambahLokasi'));
   
    const TambahDetail = React.lazy(() =>
    import('./views/masterdata/DetailAset/TambahDetail'));
    const DetailAset = React.lazy(() =>
    import ('./views/masterdata/DetailAset/DetailAset'));
    
    

    const Penambahan = React.lazy(() =>
    import ('./views/Aset/Penambahan/Penambahan'));
    const Pemindahan = React.lazy(() =>
    import ('./views/Aset/Pemindahan/Pemindahan'));
    const Status = React.lazy(() =>
    import ('./views/Aset/Status/Status'));
    const PengaduanBaru = React.lazy(() =>
    import ('./views/Pengaduan/PengaduanBaru/PengaduanBaru'));
    const Pelaporan = React.lazy(() =>
    import ('./views/Pengaduan/Pelaporan/Pelaporan'));
    const RekapitulasiPengaduan  = React.lazy(() =>
    import ('./views/Pengaduan/RekapitulasiPengaduan/RekapitulasiPengaduan'));
    const PelaporanPemeriksaan = React.lazy(() =>
    import ('./views/Pemeriksaan/PelaporanPemeriksaan/PelaporanPemeriksaan'));
    const SuratTugas = React.lazy(() =>
    import ('./views/Pemeriksaan/SuratTugas/SuratTugas'));
    const RekapitulasiPemeriksaan = React.lazy(() =>
    import ('./views/Pemeriksaan/RekapitulasiPemeriksaan/RekapitulasiPemeriksaan'));
    const PeminjamanBaru = React.lazy(() =>
    import ('./views/Peminjaman/PeminjamanBaru/PeminjamanBaru'));
    const PelaporanPeminjaman = React.lazy(() =>
    import ('./views/Peminjaman/PelaporanPeminjaman/PelaporanPeminjaman'));
    const RekapitulasiPeminjaman = React.lazy(() =>
    import ('./views/Peminjaman/RekapitulasiPeminjaman/RekapitulasiPeminjaman'));


const routes = [
    // { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard',exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/theme', name: 'Theme', component: Colors, exact: true },
    { path: '/theme/colors', name: 'Colors', component: Colors },
    { path: '/theme/typography', name: 'Typography', component: Typography },
    { path: '/base', name: 'Base', component: Cards, exact: true },
    { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
    { path: '/base/cards', name: 'Cards', component: Cards },
    { path: '/base/carousels', name: 'Carousel', component: Carousels },
    { path: '/base/collapses', name: 'Collapse', component: Collapses },
    { path: '/base/forms', name: 'Forms', component: BasicForms },
    { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
    { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
    { path: '/base/navbars', name: 'Navbars', component: Navbars },
    { path: '/base/navs', name: 'Navs', component: Navs },
    { path: '/base/paginations', name: 'Paginations', component: Paginations },
    { path: '/base/popovers', name: 'Popovers', component: Popovers },
    { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
    { path: '/base/switches', name: 'Switches', component: Switches },
    { path: '/base/tables', name: 'Tables', component: Tables },
    { path: '/base/tabs', name: 'Tabs', component: Tabs },
    { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
    { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
    { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
    { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
    { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
    { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
    { path: '/charts', name: 'Charts', component: Charts },
    { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
    { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
    { path: '/icons/flags', name: 'Flags', component: Flags },
    { path: '/icons/brands', name: 'Brands', component: Brands },
    { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
    { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
    { path: '/notifications/badges', name: 'Badges', component: Badges },
    { path: '/notifications/modals', name: 'Modals', component: Modals },
    { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
    { path: '/widgets', name: 'Widgets', component: Widgets },
    { path: '/users', exact: true, name: 'Users', component: Users },
    { path: '/users/:id', exact: true, name: 'User Details', component: User },

    { path: '/masterdata', name: 'Masterdata', component: JenisAset, exact: true },
    { path: '/masterdata/Admin', name: 'Admin', component: Admins },
    { path: '/masterdata/Admin-tambahadmin', name: 'Tambah Admin', component: TambahAdmin },
    { path: '/masterdata/alat-aset', name: 'Alat Aset', component: AlatAset },
    { path: '/masterdata/alat-aset-tambahalat', name: 'Alat Aset', component: TambahAlat },
    { path: '/masterdata/jenis-aset', name: 'Jenis Aset', component: JenisAset },
    { path: '/masterdata/jenis-aset-tambahjenis', name: 'Jenis Aset', component: TambahJenis },
    { path: '/masterdata/jenis-aset-ubahjenis', name: 'Jenis Aset', component: UbahJenis },
    { path: '/masterdata/lokasi', name: 'Lokasi', component: Lokasi },
    { path: '/masterdata/lokasi-tambahlokasi', name: 'Lokasi', component: TambahLokasi },
    { path: '/masterdata/detail-aset-tambahdetail', name: 'Detail Aset', component: TambahDetail },
    { path: '/masterdata/detail-aset', name: 'Detail Aset', component: DetailAset },
  
   
    { path: '/masterdata/gudang', name: 'DataGudang', component: DataGudang },
    { path: '/masterdata/gudang-tambahgudang', name: 'tambahDataGudang', component: TambahGudang },
    { path: '/masterdata/rak', name: 'DataRak', component: DataRak },
    { path: '/masterdata/rak-tambahrak', name: 'tambahDatarak', component: TambahRak },
    { path: '/aset', name: 'Aset', component: Penambahan, exact: true },
    { path: '/aset/Penambahan', name: 'Penambahan', component: Penambahan },
    { path: '/aset/Pemindahan', name: 'Pemindahan', component: Pemindahan },
    { path: '/aset/Pemindahan', name: 'Pemindahan', component: Pemindahan },
    { path: '/aset/status', name: 'Status Aset', component: Status },
    { path: '/Pengaduan', name: 'Pengaduan', component: PengaduanBaru, exact: true },
    { path: '/aset/pengaduan-baru', name: 'Pengaduan Baru', component: PengaduanBaru },
    { path: '/aset/pelaporan', name: 'Pelaporan', component: Pelaporan },
    { path: '/aset/rekapitulasi', name: 'Rekapitulasi Pengaduan', component: RekapitulasiPengaduan },
    { path: '/Pemeriksaan', name: 'Pemeriksaan', component: SuratTugas, exact: true },
    { path: '/Pemeriksaan/surat-tugas', name: 'Surat Tugas', component: SuratTugas },
    { path: '/Pemeriksaan/pelaporan', name: 'Pelaporan', component: PelaporanPemeriksaan },
    { path: '/Pemeriksaan/rekapitulasi', name: 'Rekapitulasi Pemeriksaan', component: RekapitulasiPemeriksaan },
    { path: '/peminjaman', name: 'Peminjaman', component: PeminjamanBaru, exact: true },
    { path: '/peminjaman/peminjaman-baru', name: 'Peminjaman Baru', component: PeminjamanBaru },
    { path: '/peminjaman/pelaporan-peminjaman', name: 'Pelaporan Peminjaman ', component: PelaporanPeminjaman },
    { path: '/peminjaman/rekapitulasi-peminjaman', name: 'Rekapitulasi Peminjaman ', component: RekapitulasiPeminjaman },
    { path: '/Tindakan', name: 'Tindakan', component: TindakanBaru, exact: true },
    { path: '/Tindakan/tindakan-baru', name: 'Tindakan Baru', component: TindakanBaru },
    { path: '/Tindakan/rekapitulasi', name: 'Tindakan Baru', component: RekapitulasiTindakan },
    { path: '/Tindakan/pelaporan', name: 'PelaporanTindakan ', component:PelaporanTindakan },

];

export default routes;