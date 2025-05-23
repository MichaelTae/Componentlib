import './App.css';
import Container from './components/container';
import Layout from './components/layout';
import Navbar from './components/navbar';
import { PageSection } from './components/pageSection';
import { useComponentGroups } from './utils/hooks/useComponentGroup';
import { useState } from 'react';
type GroupKey = 'Cards' | 'Buttons' | 'Forms' | 'Modals' | 'Tables';

function App() {
  const componentGroups = useComponentGroups();
  const [selectedNavItem, setSelectedNavItem] = useState<GroupKey>('Cards');
  const group = componentGroups[selectedNavItem];
  return (
    <>
      <Container>
        <Navbar
          onNavItemClick={(item) => setSelectedNavItem(item as GroupKey)}
        />
        <Layout>
          <PageSection
            title={selectedNavItem}
            selectedComponent={group.selectedComponent}
            selectedComponentName={group.selectedComponentName ?? ''}
          >
            {group.components}
          </PageSection>
        </Layout>
      </Container>
    </>
  );
}

export default App;
