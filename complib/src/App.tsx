import './App.css';
import Container from './components/container';
import Layout from './components/layout';
import Navbar from './components/navbar';
import { PageSection } from './components/pageSection';
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Layout>
          <PageSection title='Placeholder Title'>
            <div className='w-32 h-32 border'>Placeholder</div>
            <div className='w-32 h-32 border'>Placeholder</div>
            <div className='w-32 h-32 border'>Placeholder</div>
            <div className='w-32 h-32 border'>Placeholder</div>
          </PageSection>
        </Layout>
      </Container>
    </>
  );
}

export default App;
