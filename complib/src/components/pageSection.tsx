interface PageSectionProps {
  title: string;
  selectedComponentName: string;
  selectedComponent: React.ReactNode;
  children: React.ReactNode;
}

export const PageSection = ({
  title,
  selectedComponent,
  children,
  selectedComponentName,
}: PageSectionProps) => {
  return (
    <section className='p-6 space-y-4 grid grid-cols-1 grid-rows-[20%_80%] h-full w-full '>
      <h1 className='text-4xl font-bold text-white text-center'>{title}</h1>
      <div className='grid grid-cols-1 grid-rows-[40%_60%] border border-amber-300 h-full'>
        <div className='w-full h-full border items-center justify-center flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>{selectedComponentName}</h2>
          <div className='w-1/3 h-2/3  flex items-center justify-center'>
            {selectedComponent}
          </div>
        </div>
        <div className=' grid grid-cols-4 grid-rows-3  gap-2 justify-center p-4 cursor-pointer '>
          {children}
        </div>
      </div>
    </section>
  );
};
