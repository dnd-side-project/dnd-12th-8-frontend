import { cn } from '@/utils/cn';

interface TextChipProps {
  className?: string;
  label: string;
  type?: 'outline' | 'solid';
}

function TextChip({ type = 'solid', label, className }: TextChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-[20px] px-4 py-2 font-body3 text-gray-50',
        type === 'outline' && 'border-1 border-gray-400',
        type === 'solid' && 'bg-gray-600',
        className,
      )}
    >
      <span>{label}</span>
    </div>
  );
}

export default TextChip;
