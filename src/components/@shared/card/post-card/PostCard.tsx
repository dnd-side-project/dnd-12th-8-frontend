import Image from 'next/image';
import RoleChip from '@/components/@shared/chip/RoleChip';
import { PostCardItemSchema } from '@/types/schema';

const PostCard = ({
  id,
  imageUrl,
  thumbnailUrl,
  title,
  point,
  target,
  questionCount,
  role,
}: PostCardItemSchema) => {
  console.log(id, point, target, questionCount);
  return (
    <div className="h-70 w-full overflow-hidden rounded-[10px]">
      <div className="relative h-55 overflow-hidden rounded-[10px]">
        <Image src={imageUrl} alt={`카드 이미지`} fill sizes="100%" className="object-cover" />
        <div className="absolute top-0 right-0">
          <RoleChip variant={role} />
        </div>
      </div>

      <div className="pt-2">
        <div className="flex w-full items-center gap-3">
          <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src={thumbnailUrl}
              alt={`썸네일 이미지`}
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
  );
};

export default PostCard;
