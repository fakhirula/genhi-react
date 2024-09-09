import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container mx-auto min-w-min grid grid-flow-row gap-10 pt-8 pb-10">
        <section id="footer-web" className="grid grid-rows-1 lg:grid-cols-12 justify-between item gap-12">
            <div className="w-full lg:col-span-4 flex flex-col gap-5">
                <div className="">
                    <img src="./assets/images/logo.svg" className="max-w-48" alt=""/>
                </div>
                <p className="text-lg font-semibold">Website Penggalangan Dana Online untuk Konservasi Hutan dan Lingkungan.</p>
                <div className="flex flex-col gap-3">
                    <p>GenerasiHijau resmi berbadan hukum dan memiliki Izin Pengumpulan Donasi
                        pada SK Kemensos No. 123/HUK-PS/2024.</p>
                    <div className="flex flex-row gap-5">
                        <a href=""><i className="fa-brands fa-lg fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-lg fa-x-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-lg fa-facebook-f"></i></a>
                        <a href=""><i className="fa-brands fa-lg fa-tiktok"></i></a>
                        <a href=""><i className="fa-brands fa-lg fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="w-full lg:col-span-2 flex flex-col gap-5">
                <p className="font-semibold">Informasi</p>
                <ul className="flex flex-col gap-1">
                    <li><a href="" className="text-teal font-semibold">Syarat dan Ketentuan</a></li>
                    <li><a href="" className="text-teal font-semibold">Kebijakan Privasi</a></li>
                    <li><a href="" className="text-teal font-semibold">FAQ</a></li>
                    <li><a href="" className="text-teal font-semibold">Karir</a></li>
                </ul>
            </div>
            <div className="w-full lg:col-span-2 flex flex-col gap-5">
                <p className="font-semibold">Solusi Bisnis</p>
                <ul className="flex flex-col gap-1">
                    <li><a href="" className="text-teal font-semibold">Pendukung</a></li>
                    <li><a href="" className="text-teal font-semibold">Penggerak</a></li>
                    <li><a href="" className="text-teal font-semibold">Dampak Positif</a></li>
                    <li><a href="" className="text-teal font-semibold">Collaboratree</a></li>
                    <li><a href="" className="text-teal font-semibold">Corporatree</a></li>
                    <li><a href="" className="text-teal font-semibold">Mitra Hijau</a></li>
                </ul>
            </div>
            <div className="w-full lg:col-span-4 flex flex-col items-center gap-5">
                <p className="font-semibold">Global Felled Forest per Hectare Counter</p>
                <iframe className="font-semibold" title='Hectares of forests cut down or burned' src='https://www.theworldcounts.com/embeds/counters/93?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=16'></iframe>
            </div>
        </section>
        <section id="copyright" className="text-center lg:text-left">
            <p>©2024 GenerasiHijau. All Rights Reserved. - made with <i className="fa-solid fa-shield-heart text-teal"></i></p>
        </section>
    </footer>
  );
}

export default Footer;