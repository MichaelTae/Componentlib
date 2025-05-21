import React from 'react';
import { ButtonBase } from '../../components/buttons/buttonBase';

export function useButtons() {
  const [selectedComponentName, setSelectedComponentName] = React.useState<
    string | null
  >(null);
  const components = [
    <ButtonBase
      key='b1'
      variant='primary'
      onSelect={() => setSelectedComponentName('Primary Button')}
      componentName='Primary Button'
    >
      Primary Button
    </ButtonBase>,
    <ButtonBase
      key='b2'
      variant='secondary'
      onSelect={() => setSelectedComponentName('Secondary Button')}
      componentName='Secondary Button'
    >
      Secondary Button
    </ButtonBase>,
    <ButtonBase
      key='b3'
      variant='danger'
      onSelect={() => setSelectedComponentName('Danger Button')}
      componentName='Danger Button'
    >
      Danger Button
    </ButtonBase>,
  ];
  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );
  return { components, selectedComponent, selectedComponentName: '' };
}
