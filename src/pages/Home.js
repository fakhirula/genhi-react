import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Event from '../components/sections/Event';
import Support from '../components/sections/Support';
import Campaign from '../components/sections/Campaign';
import News from '../components/sections/News';
import Join from '../components/sections/Join';
import Layout from '../Layout';

function Main() {

  return (
    <Layout>
      <Hero title="Bersama Jaga Bumi Untuk Generasi Selanjutnya" />
      <Stats title="Kamu Gak Sendirian" donasi="" pohon="" aksi="" kampanye="" />
      <Event title="" />
      <Support title="Dukungan" />
      <Campaign title="Kampanye" />
      <News title="Aksi Kami" />
      <Join title="Indonesia Butuh Kamu" />
    </Layout>
  );
}

export default Main;