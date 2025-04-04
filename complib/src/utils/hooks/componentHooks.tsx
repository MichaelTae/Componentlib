import React from 'react';
import { CardBase } from '../../components/cards/cardbase';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/cards/cardvariants';
export function useComponents() {
  const [selectedComponentName, setSelectedComponentName] = React.useState<
    string | null
  >(null);
  const components = [
    <CardBase
      key={0}
      componentName='CardBase'
      onSelect={(componentName) => setSelectedComponentName(componentName)}
    >
      <CardHeader>
        <CardTitle className='text-2xl '>Card Title goes here</CardTitle>
      </CardHeader>
      <CardContent>Card description goes here.</CardContent>
      <CardFooter>Card footer goes here.</CardFooter>
    </CardBase>,
    <CardBase
      key={1}
      componentName='Testing Card'
      onSelect={(componentName) => setSelectedComponentName(componentName)}
    ></CardBase>,
  ];

  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );

  return { components, selectedComponent, selectedComponentName };
}
