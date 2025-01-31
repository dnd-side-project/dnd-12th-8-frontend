import { cn } from '@/utils/cn';

interface CommonLayoutProps {
  height: string;
  backgroundColor: string;
  title: string;
  className?: string;
}

export default function CommonLayout({
  height,
  backgroundColor,
  title,
  className,
}: CommonLayoutProps) {
  return (
    <div
      className={cn('flex w-full items-center justify-center', height, backgroundColor, className)}
    >
      <h1 className="font-title text-white">{title}</h1>
    </div>
  );
}
