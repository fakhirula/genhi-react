import { Link } from 'react-router-dom';
import Assets from '../Assets/img/icon.svg';

function Header() {
  return (
    <header className="shadow-md">
        <div className="container max-w-7xl mx-auto flex flex-col">
            <section id="brand" className="flex justify-between items-center border-b border-b-gray py-3">
                <div className="block lg:hidden">
                    <i className="fa-solid fa-2x fa-bars"></i>
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-center lg:text-left text-teal text-2xl font-semibold"><Link to="">GenerasiHijau</Link></h1>
                </div>
                <div className="hidden lg:w-1/2 lg:flex justify-end items-center gap-5">
                    <form className="w-3/5">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <div className="flex">
                                <input type="search" id="default-search" className="rounded-l-lg block w-full py-3 px-10 ps-10 text-sm text-gray-900 border-0 bg-gray-100 focus:ring-0 focus:border-0" placeholder="Search..." required />
                                <button type="submit" className="rounded-r-lg border-2 font-semibold bg-white text-gray-500 hover:bg-teal hover:text-white hover:border-teal text-sm px-4 py-2  transition ease-in-out delay-50 duration-500">Search</button>
                            </div>
                        </div>
                    </form>
                    <Link to="#join" className="py-2 px-3 text-teal font-semibold border-2 border-teal hover:text-white hover:bg-teal rounded-md transition ease-in-out delay-50 duration-500">Bergabung</Link>
                </div>
                <div className="block lg:hidden">
                    <img src={Assets} className="max-h-12" alt=""/>
                </div>
            </section>
            <section id="header-nav" className="hidden lg:block">
                <nav>
                    <ul className="flex gap-8 justify-start items-center py-3">
                        <li>
                            <button id="solusi" data-dropdown-toggle="dropdown-solusi" data-dropdown-trigger="hover" className="text-teal font-semibold text-center inline-flex items-center focus:outline-none" type="button">Solusi
                                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                        </li>
                        <div id="dropdown-solusi" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-44">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="solusi">
                                <li>
                                    <Link to="/solusi#perusahaan" className="block px-4 py-2 hover:bg-gray-100">Perusahaan</Link>
                                </li>
                                <li>
                                    <Link to="/solusi#individu" className="block px-4 py-2 hover:bg-gray-100">Individu</Link>
                                </li>
                            </ul>
                        </div>
                        <li><Link to="/galeri" className="text-teal font-semibold">Galeri</Link></li>
                        <li>
                            <button id="carbon" data-dropdown-toggle="dropdown-carbon" data-dropdown-trigger="hover" className="text-teal font-semibold text-center inline-flex items-center focus:outline-none" type="button">Carbon
                                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                        </li>
                        <div id="dropdown-carbon" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-44">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="carbon">
                                <li>
                                    <Link to="/karbon#tujuan" className="block px-4 py-2 hover:bg-gray-100">Tujuan</Link>
                                </li>
                                <li>
                                    <Link to="/karbon#rumus" className="block px-4 py-2 hover:bg-gray-100">Rumus Karbon</Link>
                                </li>
                                <li>
                                    <Link to="/karbon#hitung" className="block px-4 py-2 hover:bg-gray-100">Hitung Karbon</Link>
                                </li>
                            </ul>
                        </div>
                        <li><Link to="/forum" className="text-teal font-semibold">Forum</Link></li>
                        <li><Link to="/tentang" className="text-teal font-semibold">Tentang Kami</Link></li>
                    </ul>
                </nav>
            </section>
        </div>
    </header>
  );
}

export default Header;