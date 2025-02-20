import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={cn(
        'w-full rounded-[10px] bg-gray-600 px-[20px] py-[16px] text-gray-50 placeholder:font-body2 placeholder:text-gray-400',
        props.className,
      )}
    />
  );
}

export default Input;
