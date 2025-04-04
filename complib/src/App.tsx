import './App.css';
import Container from './components/container';
import Layout from './components/layout';
import Navbar from './components/navbar';
import { PageSection } from './components/pageSection';
import { useComponents } from './utils/hooks/componentHooks';

function App() {
  const { components, selectedComponent, selectedComponentName } =
    useComponents();

  return (
    <>
      <Container>
        <Navbar />
        <Layout>
          <PageSection
            title='Placeholder Title'
            selectedComponent={selectedComponent}
            selectedComponentName={selectedComponentName || ''}
          >
            {components}
          </PageSection>
        </Layout>
      </Container>
    </>
  );
}

export default App;
