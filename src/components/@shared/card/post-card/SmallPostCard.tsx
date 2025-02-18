import Image from 'next/image';
import RoleChip from '@/components/@shared/chip/RoleChip';
import TextChip from '@/components/@shared/chip/TextChip';

type RoleVariant = 'developer' | 'designer' | 'planner' | 'all';

interface SmallPostCardProps {
  title: string;
  targetJob: string;
  thumbnailImgUrl: string;
  categoryNames: string[];
}

const SmallPostCard = ({
  title,
  targetJob,
  thumbnailImgUrl,
  categoryNames,
}: SmallPostCardProps) => {
  return (
    <div className="w-full overflow-hidden border-b border-gray-600 pb-4">
      <div className="flex gap-2">
        <RoleChip variant={targetJob as RoleVariant} />
        {categoryNames.map((categoryName) => (
          <TextChip key={categoryName} label={categoryName} />
        ))}
      </div>

      <div className="mt-5 flex w-full items-center gap-3">
        <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-[10px]">
          <Image
            src={thumbnailImgUrl}
            alt={`썸네일 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 flex-col pl-4">
          <h3 className="line-clamp-2 font-title1 text-gray-50">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallPostCard;
