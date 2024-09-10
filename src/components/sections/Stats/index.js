
function Stats({title}) {
    return (
      <section id="stats" className="flex flex-col items-center gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
          <div>
              <h2 className="text-4xl font-semibold">{title}</h2>
          </div>
          <div className="w-full">
              <div className="px-4 bg-white">
                  <dl className="grid max-w-screen-xl gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-5xl font-semibold">15.22M</dt>
                          <dd className="font-semibold text-gray-500">Donasi Terkumpul</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-5xl font-semibold">32.5K</dt>
                          <dd className="font-semibold text-gray-500">Pohon Tertanam</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-5xl font-semibold">500+</dt>
                          <dd className="font-semibold text-gray-500">Aksi Bersama</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                          <dt className="mb-2 text-5xl font-semibold">2.1K</dt>
                          <dd className="font-semibold text-gray-500">Kampanye Hijau</dd>
                      </div>
                  </dl>
              </div>
          </div>
      </section>
    );
  }
  
  export default Stats;