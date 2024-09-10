import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Card';
import { newsData } from '../../../utils/constants';


function NewsCard({ title, image, category, date, views }) {
  return (
    <Card>
      <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" className="object-cover w-full h-52 rounded-t-md" src={image} />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <Link rel="noopener noreferrer" to="#" className="text-xs tracking-wider uppercase hover:underline transition ease-in-out delay-50 duration-500">
          {category}
        </Link>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
          <span>{date}</span>
          <span>{views} views</span>
        </div>
      </div>
    </Card>
  );
}

// Fungsi utama untuk menampilkan daftar berita
function News({title}) {
  return (
    <section id="news" className="flex flex-col gap-y-12 pt-10 mb-24 transition-all duration-700 ease-in-out">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-gray-500">Dokumentasi adalah bukti nyata tentang apa yang kami lakukan bersama.</p>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {newsData.map((newsItem) => (
          <NewsCard key={newsItem.title} {...newsItem} />
        ))}
      </div>
    </section>
  );
}

export default News;