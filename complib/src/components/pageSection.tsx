import { CardBase } from './cards/cardbase';

interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

export const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <section className='p-6 space-y-4 grid grid-cols-1 grid-rows-[20%_80%] h-full w-full '>
      <h1 className='text-4xl font-bold text-white text-center'>{title}</h1>
      <div className='grid grid-cols-1 grid-rows-[40%_60%] border border-amber-300 h-full'>
        <div className='w-full h-full border items-center justify-center flex'>
          <CardBase children={undefined}></CardBase>
        </div>
        <div className=' flex gap-6 justify-center py-4 border'>{children}</div>
      </div>
    </section>
  );
};
