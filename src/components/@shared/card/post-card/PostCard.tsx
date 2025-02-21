import Image from 'next/image';
import Link from 'next/link';
import MoneyChip from '@/components/@shared/chip/MoneyChip';
import RoleChip from '@/components/@shared/chip/RoleChip';

interface PostCardProps {
  data: {
    projectId: number;
    logoImageUrl: string;
    title: string;
    thumbnailImageUrl: string;
    point: number;
    questionCount: number;
    targetJob: 'ALL' | 'DESIGNER' | 'PLANNER' | 'DEVELOPER';
  };
}

const PostCard = ({ data }: PostCardProps) => {
  const { logoImageUrl, thumbnailImageUrl, title, point, questionCount, targetJob, projectId } =
    data;

  return (
    <Link href={`/project/${projectId}`}>
      <div className="h-70 w-full overflow-hidden rounded-[10px]">
        <div className="relative h-55 overflow-hidden rounded-[10px]">
          <Image
            src={thumbnailImageUrl}
            alt={`썸네일 이미지`}
            fill
            sizes="100%"
            className="object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <MoneyChip amount={point} />
            <RoleChip role={targetJob} />
          </div>
        </div>

        <div className="pt-2">
          <div className="flex w-full items-center gap-3">
            <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-[10px]">
              <Image
                src={logoImageUrl}
                alt={`로고 이미지`}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 flex-col pr-2">
              <h3 className="truncate font-body2 text-gray-50">{title}</h3>
              <p className="font-caption-regular mt-1 text-gray-50">{questionCount}문항</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
