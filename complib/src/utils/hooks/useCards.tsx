import React from 'react';
import { CardBase } from '../../components/cards/cardbase';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
} from '../../components/cards/cardvariants';
import { SelectBase } from '../../components/select/selectBase';
import { InputBase } from '../../components/input/inputBase';
import { ButtonBase } from '../../components/buttons/buttonBase';

export function useCards() {
  const [selectedComponentName, setSelectedComponentName] = React.useState<
    string | null
  >(null);

  const components = [
    <CardBase
      key={0}
      componentName='CardBase'
      onSelect={setSelectedComponentName}
    >
      <CardHeader>
        <CardTitle className='text-2xl '>Card Title goes here</CardTitle>
      </CardHeader>
      <CardContent>Card description goes here.</CardContent>
      <CardFooter>Card footer goes here.</CardFooter>
    </CardBase>,
    <CardBase
      key={1}
      componentName='Card with Select'
      onSelect={setSelectedComponentName}
    >
      <CardHeader>
        <CardTitle className='text-2xl '>Card with Select</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <SelectBase className='w-full border border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg px-4'>
          <option value=''>Select an option</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </SelectBase>
      </CardContent>
      <CardFooter className='flex justify-center gap-2'>
        <ButtonBase>Enter</ButtonBase>
        <ButtonBase variant='secondary'>Cancel</ButtonBase>
      </CardFooter>
    </CardBase>,
    <CardBase
      key={2}
      componentName='Card with Input'
      onSelect={setSelectedComponentName}
    >
      <CardHeader>
        <CardTitle className='text-2xl '>Card with Input</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <InputBase className='w-full h-10 border border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg overflow-hidden px-4' />
      </CardContent>
      <CardFooter className='flex justify-center gap-2 '>
        <ButtonBase size='medium'>Enter</ButtonBase>
        <ButtonBase variant='secondary'>Cancel</ButtonBase>
      </CardFooter>
    </CardBase>,
    <CardBase
      key={3}
      componentName='Card with Icon'
      onSelect={setSelectedComponentName}
    >
      <CardHeader className='flex justify-between'>
        <CardTitle className='text-2xl '>Card with Icon</CardTitle>
        <CardIcon className='flex mt-1'>
          <path
            fill-rule='evenodd'
            d='M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z'
            clip-rule='evenodd'
          />
        </CardIcon>
      </CardHeader>
    </CardBase>,
  ];

  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );

  return { components, selectedComponent, selectedComponentName };
}
