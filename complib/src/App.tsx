import './App.css';
import Container from './components/container';
import Layout from './components/layout';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Layout>
          <div>Hello</div>
        </Layout>
      </Container>
    </>
  );
}

export default App;
