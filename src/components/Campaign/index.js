// import { Link } from 'react-router-dom';
import Img1 from '../Assets/img/campaign/radoslaw-prekurat-ubud-unsplash.jpg';
import Img2 from '../Assets/img/campaign/fikri-rasyid-polusi-unsplash.jpg';
import Img3 from '../Assets/img/campaign/sutirta-budiman-mangrove-unsplash.jpg';
import Img4 from '../Assets/img/campaign/ocg-saving-the-ocean-sampah-unsplash.jpg';

function Campaign() {
    return (
      <section id="campaign" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
            <div className="space-y-2">
                <h2 className="text-4xl font-semibold">Kampanye</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-48 rounded-t-md" src={Img1}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Peduli Ubud: Hilangnya Ekosistem Monyet</h3>
                        <div className="flex flex-col flex-wrap gap-3 text-xs">
                            <span className="text-gray-500 text-sm">Campaigner: <a href="" className="text-teal">GenerasiHijau</a></span>
                            <div className="flex flex-row gap-1 justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">0k</span> Donasi ditambahkan</span>
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">250+</span> Pohon terkumpul</span>
                                </div>
                                <span className="text-gray-500"><span className="text-gray-900 font-medium">13</span> hari lagi</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                <div className="bg-teal h-1.5 rounded-full" style={{width: "22%"}}></div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-48 rounded-t-md" src={Img2}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Car Free Day: Jakarta Bebas Polusi</h3>
                        <div className="flex flex-col flex-wrap gap-3 text-xs">
                            <span className="text-gray-500 text-sm">Campaigner: <a href="" className="text-teal">GenerasiHijau</a></span>
                            <div className="flex flex-row gap-1 justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">1.10k</span> Donasi ditambahkan</span>
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">120+</span> Pohon terkumpul</span>
                                </div>
                                <span className="text-gray-500"><span className="text-gray-900 font-medium">23</span> hari lagi</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                <div className="bg-teal h-1.5 rounded-full" style={{width: "9%"}}></div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-48 rounded-t-md" src={Img3}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Gerakan Mangrove: Selamatkan Masa Depan</h3>
                        <div className="flex flex-col flex-wrap gap-3 text-xs">
                            <span className="text-gray-500 text-sm">Campaigner: <a href="" className="text-teal">GenerasiHijau</a></span>
                            <div className="flex flex-row gap-1 justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">43.1k</span> Donasi ditambahkan</span>
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">570+</span> Pohon terkumpul</span>
                                </div>
                                <span className="text-gray-500"><span className="text-gray-900 font-medium">6</span> hari lagi</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                <div className="bg-teal h-1.5 rounded-full" style={{width: "56%"}}></div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-48 rounded-t-md" src={Img4}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">GHxZW: 30 Days Zero Waste Challenge</h3>
                        <div className="flex flex-col flex-wrap gap-3 text-xs">
                            <span className="text-gray-500 text-sm">Campaigner: <a href="" className="text-teal">GenerasiHijau</a></span>
                            <div className="flex flex-row gap-1 justify-between items-end">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">12.2k</span> Donasi ditambahkan</span>
                                    <span className="text-gray-500"><span className="text-gray-900 font-medium">124+</span> Pohon terkumpul</span>
                                </div>
                                <span className="text-gray-500"><span className="text-gray-900 font-medium">2</span> hari lagi</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                                <div className="bg-teal h-1.5 rounded-full" style={{width: "73%"}}></div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
  }
  
  export default Campaign;