import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ href, children, className = '' }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors';
  const combinedClassName = `${baseStyle} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return <button className={combinedClassName}>{children}</button>;
};
