interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

export const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <section className='p-6 space-y-4 grid grid-cols-1 grid-rows-[20%_80%] h-full w-full '>
      <h1 className='text-4xl font-bold text-white text-center'>{title}</h1>
      <div className='grid grid-cols-1 grid-rows-[30%_70%] gap-4 border border-amber-300 h-full'>
        <div className='w-44 h-44 border justify-self-center self-center'>
          Placeholder for component in focus
        </div>
        <div className=' flex gap-6 justify-center py-4'>{children}</div>
      </div>
    </section>
  );
};
