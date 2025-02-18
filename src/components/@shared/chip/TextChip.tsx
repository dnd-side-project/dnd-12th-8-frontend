import { cn } from '@/utils/cn';

interface TextChipProps {
  className?: string;
  label: string;
}

function TextChip({ label, className }: TextChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-3xl bg-gray-600 px-4 py-2 font-body3 text-gray-50',
        className,
      )}
    >
      <span>{label}</span>
    </div>
  );
}

export default TextChip;
