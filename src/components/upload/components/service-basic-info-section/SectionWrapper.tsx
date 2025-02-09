interface SectionBoxProps {
  title: string;
  isRequired?: boolean;
  children: React.ReactNode;
}

function SectionWrapper({ title, isRequired = false, children }: SectionBoxProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex">
        <p className="font-body2 text-gray-0">{title}</p>
        {isRequired && <span className="text-red-500">&nbsp;*</span>}
      </div>
      {children}
    </div>
  );
}

export default SectionWrapper;
