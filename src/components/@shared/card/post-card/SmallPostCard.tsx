import Image from 'next/image';
import Link from 'next/link';
import { RightIcon } from '@/assets/icons';
import Button from '@/components/@shared/button/Button';
import RoleChip from '@/components/@shared/chip/RoleChip';
import TextChip from '@/components/@shared/chip/TextChip';
import { cn } from '@/utils/cn';

type RoleVariant = 'developer' | 'designer' | 'planner' | 'all';

interface SmallPostCardProps {
  title: string;
  targetJob: string;
  thumbnailImgUrl: string;
  categoryNames: string[];
  moveToDetail?: string;
  isMyPage?: boolean;
}

const SmallPostCard = ({
  title,
  targetJob,
  thumbnailImgUrl,
  categoryNames,
  moveToDetail,
  isMyPage,
}: SmallPostCardProps) => {
  return (
    <div
      className={cn(
        'w-full overflow-hidden pb-4',
        isMyPage ? 'rounded-[10px] bg-gray-800 pt-5 pb-7 px-5' : 'border-b border-gray-600',
      )}
    >
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
          <h3
            className={cn(
              'line-clamp-2 font-title2 text-gray-50',
              isMyPage ? 'font-body2' : 'font-title2',
            )}
          >
            {title}
          </h3>
        </div>
      </div>

      {moveToDetail && (
        <div className="flex justify-end">
          <Link href={moveToDetail as string}>
            <Button
              variant="lined"
              size="sm"
              className="h-[40px] w-[180px] gap-2 rounded-full pl-2"
            >
              프로젝트 상세보기
              <RightIcon className="h-5 w-5 text-gray-50" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SmallPostCard;
