import React from 'react';
import { FormBase } from '../../components/forms/formBase';
import {
  FormHeader,
  FormContent,
  FormFooter,
} from '../../components/forms/formvariants';
import { ButtonBase } from '../../components/buttons/buttonBase';
export function useForms() {
  const [selectedComponentName, setSelectedComponentName] = React.useState<
    string | null
  >(null);
  console.log(selectedComponentName);
  const components = [
    <FormBase
      key={0}
      componentName='FormBase'
      onSelect={() => setSelectedComponentName('FormBase')}
      className='flex flex-col gap-2 '
    >
      <FormHeader className='text-2xl'>FormBase</FormHeader>
      <FormContent className='flex flex-col gap-2 '>
        <input
          type='text'
          placeholder='Enter text'
          className='w-full h-10 border border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg overflow-hidden px-4'
        />
        <input
          type='password'
          placeholder='Enter password'
          className='w-full h-10 border border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg overflow-hidden px-4'
        />
      </FormContent>
      <FormFooter className='flex justify-center '>
        <ButtonBase
          size='large'
          variant='primary'
          className=' bg-cyan-400 text-black rounded-lg hover:bg-cyan-300'
          onClick={() => setSelectedComponentName('FormBase')}
        >
          Submit
        </ButtonBase>
      </FormFooter>
    </FormBase>,
  ];
  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );
  return { components, selectedComponent, selectedComponentName };
}
