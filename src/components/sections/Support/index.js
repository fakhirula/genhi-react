import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { supportData } from '../../../utils/constants';

function Support() {
  const [supporters, setSupporters] = useState(supportData);

  useEffect(() => {
    // Fetch support data from API if needed
    // setSupporters(fetchedData);
  }, []);

  return (
    <section id="support" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
      <div>
        <h2 className="text-4xl font-semibold">Dukungan</h2>
      </div>
      <div id="cards" className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3">
        {supporters.map((supporter) => (
          <div id="card" className="max-w-sm flex-shrink-0 snap-center border border-gray rounded-md py-5 px-4" key={supporter.id}>
            <div className="space-y-6 flex flex-col gap-x-3">
              <div className="flex justify-start gap-5 items-center">
                <div className="min-w-16 max-w-16 min-h-16 max-h-16 flex justify-center items-center bg-teal text-white border-4 border-gray rounded-full">{supporter.initials}</div>
                <div>
                  <p className="text-xl font-semibold">{supporter.name}</p>
                  <Link to="" className="text-seagreen font-medium text-sm underline">{supporter.occupation}</Link>
                </div>
              </div>
              <p className="text-sm text-gray-500">{supporter.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Support;