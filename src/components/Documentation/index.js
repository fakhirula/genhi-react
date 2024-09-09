// import { Link } from 'react-router-dom';
import Img1 from '../Assets/img/gallery/dhiemas-afif-febriyan-4-unsplash.jpg';
import Img2 from '../Assets/img/gallery/ocg-saving-the-ocean-2-unsplash.jpg';
import Img3 from '../Assets/img/gallery/refhad-1-unsplash.jpg';
import Img4 from '../Assets/img/gallery/alvian-hasby-3-unsplash.jpg';

function Documentation() {
    return (
      <section id="documentation" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
            <div className="space-y-2 text-center">
                <h2 className="text-4xl font-semibold">Dokumentasi Aksi</h2>
                <p className="text-gray-500">Dokumentasi adalah bukti nyata tentang apa yang kami lakukan bersama.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={Img1}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline">Convenire</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Potret Kampung Terapung di Sumedang</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                            <span>June 30, 2024</span>
                            <span>2.9K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={Img2}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline">Convenire</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Hari Peduli Sampah Nasional: Banten Pride</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                            <span>Maret 12, 2024</span>
                            <span>1.2K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={Img3}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline">Convenire</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Bukan Sekedar "Tukang Sampah"</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                            <span>Febuari 28, 2024</span>
                            <span>2.3K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col rounded-md border">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={Img4}/>
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline">Convenire</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Permasalahannya bukan di plastik, tapi kita, manusia</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                            <span>June 15, 2024</span>
                            <span>1.3K views</span>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    );
  }
  
  export default Documentation;