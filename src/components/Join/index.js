// import { Link } from 'react-router-dom';

function Join() {
    return (
      <section id="join" className="flex flex-col lg:flex-row gap-y-12 justify-between items-center pt-10 pb-16 mb-24 transition-all duration-700 ease-in-out">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 justify-start">
                <h2 className="text-4xl font-semibold">Indonesia Butuh Kamu</h2>
                <p className="">Kami bermimpi untuk menanam lebih dari 10 juta
                    pohon  dan menciptakan dunia yang lebih indah 
                    dan asri untuk kita, dia, dan semua.</p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-row items-center gap-x-5 lg:justify-end">
                <a href="" className="bg-teal text-white border-2 border-teal hover:text-teal hover:bg-transparent hover:border-teal font-semibold py-2 px-3 rounded-md  transition ease-in-out delay-50 duration-500">Jalin Kerjasama</a>
                <a href="" className="bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white font-semibold py-2 px-3 rounded-md  transition ease-in-out delay-50 duration-500">Buat Kampanye</a>
            </div>
        </section>
    );
  }
  
  export default Join;