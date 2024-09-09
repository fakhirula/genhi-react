import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

function Layout(props) {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;