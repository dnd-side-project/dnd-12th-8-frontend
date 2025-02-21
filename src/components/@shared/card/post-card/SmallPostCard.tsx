import Image from 'next/image';
import RoleChip from '@/components/@shared/chip/RoleChip';
import { cn } from '@/utils/cn';
import TextChip from '../../chip/TextChip';

interface SmallPostCardProps {
  data: {
    title: string;
    targetJob: string;
    logoImageUrl: string;
    categoryNames: string[];
  };
  styles?: {
    title?: string;
    icon?: string;
    container?: string;
  };
}

const SmallPostCard = ({ data, styles }: SmallPostCardProps) => {
  const { title, targetJob, logoImageUrl, categoryNames } = data;

  console.log('targetJob', targetJob);

  return (
    <div className={cn('flex flex-col gap-5 overflow-hidden', styles?.container)}>
      <div className="flex gap-2">
        <RoleChip role="DESIGNER" />
        {categoryNames.map((categoryName) => (
          <TextChip key={categoryName} label={categoryName} />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div
          className={cn(
            'relative h-[85px] w-[85px] shrink-0 overflow-hidden rounded-[10px]',
            styles?.icon,
          )}
        >
          <Image
            src={logoImageUrl}
            alt={`썸네일 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className={cn('line-clamp-2 font-title1 text-gray-50', styles?.title)}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallPostCard;
