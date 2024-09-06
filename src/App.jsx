import { Container } from 'react-bootstrap';
import { Header, Games, Banner, About, Partners} from '@/components';
import './App.css';

function App() {
  return (
    <Container fluid className="px-0">
      <Header />
      <Banner />
      <About />
      <Games />
      <Partners />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
