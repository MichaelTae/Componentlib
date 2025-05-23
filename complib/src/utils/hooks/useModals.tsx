import { useState } from 'react';
import { ModalBase } from '../../components/modals/modalbase';

export function useModals() {
  const [selectedComponentName, setSelectedComponentName] = useState<
    string | null
  >(null);
  const components = [
    <ModalBase
      key={'m1'}
      componentName='Modal 1'
      onSelect={setSelectedComponentName}
    >
      <p>modal 1</p>
    </ModalBase>,
  ];

  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );
  return { components, selectedComponent, selectedComponentName };
}
