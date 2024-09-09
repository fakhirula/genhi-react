// import { Link } from 'react-router-dom';
import Assets from '../Assets/img/hero.png';

function Hero() {
    return (
      <section id="hero" className="pt-16 pb-16 mb-12 transition-all duration-700 ease-in-out">
          <div className="bg-smoke py-12 lg:pb-0 grid rounded-md lg:rounded-none lg:gap-y-12">
              <div className="p-4 lg:px-12 lg:w-4/5">
                  <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight">Bersama Jaga Bumi Untuk Generasi Selanjutnya</h2>
              </div>
              <div className="grid grid-flow-col lg:grid-cols-2 lg:items-end">
                  <div className="col-span-1 flex flex-col gap-32">
                      <div className="p-4 lg:px-12 flex flex-col gap-6 lg:gap-12">
                          <p className="text-base lg:text-xl text-gray-900">Kami bermimpi untuk menanam lebih dari 10 juta
                              pohon  dan menciptakan dunia yang lebih indah 
                              dan asri untuk kita, dia, dan semua.</p>
                          <div className="flex flex-row items-center gap-3">
                              <a href="" className="bg-teal text-white border-2 border-teal hover:text-teal hover:bg-transparent hover:border-2 hover:border-teal font-semibold py-2 px-3 rounded-md  transition ease-in-out delay-50 duration-500">Eksplorasi</a>
                              <a href="" className="bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white font-semibold py-2 px-3 rounded-md  transition ease-in-out delay-50 duration-500">Lihat Video</a>
                          </div>
                      </div>
                      <div className="hidden lg:block relative">
                          <ul style={{ clipPath: "polygon(0% 0%,90% 0%,100% 100%,45% 100%,0% 100%)" }} 
                              className="absolute flex items-center text-center gap-10 left-0 bottom-0 py-5 pr-20 bg-white">
                              <li className="uppercase font-bold text-gray-500 text-xl">Ditlance</li>
                              <li className="uppercase font-bold text-gray-500 text-xl">Owthest</li>
                              <li className="uppercase font-bold text-gray-500 text-xl">Neovasi</li>
                              <li className="uppercase font-bold text-gray-500 text-xl">Onago</li>
                          </ul>
                      </div>
                  </div>
                  <div className="hidden lg:block col-span-1">
                      <div className="relative">
                          <img src={Assets} alt="" className="w-11/12 absolute right-0 bottom-0"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
  
  export default Hero;