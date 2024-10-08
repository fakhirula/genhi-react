// import { Link } from 'react-router-dom';
import Assets from '../../Assets/img/commit-rohdi-biizul-mujib-unsplash.jpg';
import Logo1 from '../../Assets/img/logo/logoipsum-1.svg';
import Logo2 from '../../Assets/img/logo/logoipsum-2.svg';
import Logo3 from '../../Assets/img/logo/logoipsum-3.svg';
import Logo4 from '../../Assets/img/logo/logoipsum-4.svg';
import Logo5 from '../../Assets/img/logo/logoipsum-5.svg';

function Event() {
    return (
      <section id="event" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
            <div className="relative rounded-md block md:flex items-center bg-gray-100 shadow-xl" style={{minHeight: "22rem"}}>
                <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{minHeight: "22rem"}}>
                  <img className="absolute inset-0 w-full h-full object-cover object-center" src={Assets} alt=""/>
                  <div className="absolute inset-0 w-full h-full bg-seagreen opacity-50"></div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                    <svg className="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"><path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path></svg>
                  </div>
                </div>
                <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-md">
                  <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                    <p className="text-gray-600 mt-3"><span className="text-eerie font-medium">GenerasiHijau.</span> merupakan wadah setiap individu, kelompok, komunitas, dan semua pihak yang peduli akan kelestarian lingkungan hidup.</p>
                    <p className="text-eerie font-medium mt-8">Bersama-sama, mari ciptakan lingkungan yang lebih sehat untuk generasi mendatang!</p>

                  </div>
                  <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                </div>
                <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-teal hover:teal focus:teal -ml-6 focus:outline-none focus:shadow-outline">
                  <span className="block" style={{transform: "scale(-1)"}}>&#x279c;</span>
                </button>
                <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-teal hover:teal focus:teal -mr-6 focus:outline-none focus:shadow-outline">
                  <span className="block" style={{transform: "scale(1)"}}>&#x279c;</span>
                </button>
              </div>
              
              <div className="flex items-center pt-5 justify-between">
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500"><img className="w-full" src={Logo1} alt="" style={{ maxHeight: "60px" }}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500"><img className="w-full" src={Logo2} alt="" style={{ maxHeight: "60px" }}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500"><img className="w-full" src={Logo3} alt="" style={{ maxHeight: "60px" }}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500"><img className="w-full" src={Logo4} alt="" style={{ maxHeight: "60px" }}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100 transition ease-in-out duration-500"><img className="w-full" src={Logo5} alt="" style={{ maxHeight: "60px" }}/></button>
              </div>
        </section>
    );
  }
  
  export default Event;