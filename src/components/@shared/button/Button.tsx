import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(`flex items-center justify-center rounded-md`, {
  variants: {
    size: {
      sm: `font-body3 h-[48px] min-w-[120px]`,
      lg: `font-body1 h-[60px] min-w-[160px]`,
      'icon-sm': `h-[48px] w-[48px]`,
      'icon-lg': `h-[60px] w-[60px]`,
    },
    variant: {
      primary: `bg-purple-500 text-gray-0 disabled:bg-gray-400 disabled:text-gray-200`,
      white: `bg-gray-0 text-purple-500 disabled:bg-gray-200 disabled:text-gray-400`,
      gray: `bg-gray-600 text-gray-50 disabled:bg-gray-700 disabled:text-gray-300`,
      lined: `border-[1.5px] border-gray-600 text-gray-0 disabled:text-gray-200`,
    },
  },
});

function Button({ variant = 'primary', size = 'lg', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ size, variant }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
