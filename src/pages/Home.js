import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Event from '../components/Event';
import Support from '../components/Support';
import Campaign from '../components/Campaign';
import Documentation from '../components/Documentation';
import Join from '../components/Join';
import Layout from '../Layout';

function Main() {

  return (
    <Layout>
      <Hero />
      <Stats />
      <Event />
      <Support />
      <Campaign />
      <Documentation />
      <Join />
    </Layout>
  );
}

export default Main;