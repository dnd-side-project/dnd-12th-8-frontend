import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface CircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
}

const DoubleCircle = ({ isSelected = false, className, ...props }: CircleProps) => {
  return (
    <button
      type="button"
      className={cn(
        'relative rounded-full border-2',
        'transition-all duration-100 hover:scale-103',
        isSelected && 'border-4 border-purple-50 bg-purple-500',
        className,
      )}
      {...props}
    >
      {isSelected && (
        <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100" />
      )}
    </button>
  );
};

export default DoubleCircle;
