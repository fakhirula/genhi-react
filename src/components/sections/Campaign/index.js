import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Card';
import { campaignData } from '../../../utils/constants';

// Fungsi untuk menampilkan satu kampanye
function CampaignCard({ campaign }) {
  return (
    <Card key={campaign.id}>
      <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={campaign.image} />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{campaign.title}</h3>
        <div className="flex flex-col flex-wrap gap-3 text-xs">
          <span className="text-gray-500 text-sm">Campaigner: <Link to="" className="text-teal">{campaign.campaigner}</Link></span>
          <div className="flex flex-row gap-1 justify-between items-end">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500"><span className="text-gray-900 font-medium">{campaign.donations}</span> Donasi ditambahkan</span>
              <span className="text-gray-500"><span className="text-gray-900 font-medium">{campaign.trees}</span> Pohon terkumpul</span>
            </div>
            <span className="text-gray-500"><span className="text-gray-900 font-medium">{campaign.daysLeft}</span> hari lagi</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
            <div className="bg-teal h-1.5 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Fungsi utama untuk menampilkan daftar kampanye
function Campaign({title}) {
  const [campaigns, setCampaigns] = useState(campaignData);

  useEffect(() => {
    // Fetch campaign data from API if needed
    // setCampaigns(fetchedData);
  }, []);

  return (
    <section id="campaign" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
      <div className="space-y-2">
        <h2 className="text-4xl font-semibold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </section>
  );
}

export default Campaign;