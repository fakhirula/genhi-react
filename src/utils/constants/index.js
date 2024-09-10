import imgCamp1 from '../../components/Assets/img/campaign/radoslaw-prekurat-ubud-unsplash.jpg';
import imgCamp2 from '../../components/Assets/img/campaign/fikri-rasyid-polusi-unsplash.jpg';
import imgCamp3 from '../../components/Assets/img/campaign/sutirta-budiman-mangrove-unsplash.jpg';
import imgCamp4 from '../../components/Assets/img/campaign/ocg-saving-the-ocean-sampah-unsplash.jpg';

import imgNews1 from '../../components/Assets/img/gallery/dhiemas-afif-febriyan-4-unsplash.jpg';
import imgNews2 from '../../components/Assets/img/gallery/ocg-saving-the-ocean-2-unsplash.jpg';
import imgNews3 from '../../components/Assets/img/gallery/refhad-1-unsplash.jpg';
import imgNews4 from '../../components/Assets/img/gallery/alvian-hasby-3-unsplash.jpg';

export const supportData = [
  {
    id: `1`,
    name: `Samuel Sebas`,
    initials: `S`,
    occupation: `Petani Sawit`,
    quote: `Saya berharap suatu hari nanti, kita bisa melihat anak-anak kita bermain bebas di taman-taman kota yang hijau dan menghirup udara segar tanpa khawatir akan polusi.`,
  },
  {
    id: `2`,
    name: `Andy Davis`,
    initials: `A`,
    occupation: `Mahasiswa`,
    quote: `Semoga langkah kecil ini bisa bermanfaat untuk hutan bangsa ini.`,
  },
  {
    id: `3`,
    name: `Jasmine`,
    initials: `J`,
    occupation: `Siswi Sekolah Dasar`,
    quote: `Saya ingin ketika sudah dewasa nanti, lingkungan di sekitar saya bersih dan banyak pohon. Saya ingin main di taman yang bagus, indah, tanpa takut menghirup udara kotor.`,
  },
  {
    id: `4`,
    name: `Tianna`,
    initials: `T`,
    occupation: `Penggiat UMKM`,
    quote: `Semoga hutan-hutan kita kembali lebat dan hijau, menjadi paru-paru dunia yang sehat.`,
  },
  {
    id: `5`,
    name: `Anonymous`,
    initials: `A`,
    occupation: `anonymous`,
    quote: `Semoga labcar, bermanfaat, dan sukses.`,
  },
  {
    id: `6`,
    name: `KLHK - RI`,
    initials: `K`,
    occupation: `Pemerintah RI`,
    quote: `Pemerintah RI pasti akan selalu mendukung semua langkah baik dari individu, kelompok, atau siapapun yang terlibat dalam hal kebaikan.`,
  },
  {
    id: `7`,
    name: `Putri Sofia`,
    initials: `P`,
    occupation: `Ibu Rumah Tangga`,
    quote: `Harapan saya, polusi udara dan air dapat segera diatasi sehingga kita bisa menghirup udara bersih dan menikmati air yang jernih.`,
  },
];

export const campaignData = [
    {
        title: `Peduli Ubud: Hilangnya Ekosistem Monyet`,
        image: imgCamp1,
        progress: 22,
        donations: 0,
        trees: 250,
        daysLeft: 13,
        campaigner: `GenerasiHijau`,
    },
    {
        title: `Car Free Day: Jakarta Bebas Polusi`,
        image: imgCamp2,
        progress: 9,
        donations: 1.10,
        trees: 120,
        daysLeft: 23,
        campaigner: `GenerasiHijau`,
    },
    {
        title: `Gerakan Mangrove: Selamatkan Masa Depan`,
        image: imgCamp3,
        progress: 56,
        donations: 43.1,
        trees: 570,
        daysLeft: 6,
        campaigner: `GenerasiHijau`,
    },
    {
        title: `GHxZW: 30 Days Zero Waste Challenge`,
        image: imgCamp4,
        progress: 73,
        donations: 12.2,
        trees: 124,
        daysLeft: 2,
        campaigner: `GenerasiHijau`,
    },
    // ... other campaigns
];


export const newsData = [
    {
      title: `Potret Kampung Terapung di Sumedang`,
      image: imgNews1,
      date: `June 30, 2024`,
      views: `2.9K`,
      category: `Convenire`,
    },
    {
      title: `Hari Peduli Sampah Nasional: Banten Pride`,
      image: imgNews2,
      date: `Maret 12, 2024`,
      views: `1.2K`,
      category: `Convenire`,
    },
    {
        title: `Bukan Sekedar 'Tukang Sampah'`,
        image: imgNews3,
        date: `Febuari 28, 2024`,
        views: `2.3K`,
        category: `Convenire`,
      },
      {
        title: `Permasalahannya bukan di plastik, tapi kita, manusia`,
        image: imgNews4,
        date: `June 15, 2024`,
        views: `1.3K`,
        category: `Convenire`,
      },
    // ... other news data
];
