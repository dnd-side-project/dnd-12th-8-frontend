import Image from 'next/image';
import { PostCardItemSchema } from '@/types/schema';

export default function PostCardLayout({
  id,
  imageUrl,
  thumbnailUrl,
  title,
  point,
  target,
  questionCount,
}: PostCardItemSchema) {
  console.log(id, imageUrl, thumbnailUrl, title, point, target, questionCount);
  return (
    <div className="h-70 overflow-hidden rounded-lg bg-red-400 shadow-md transition-colors duration-300 tablet:bg-blue-400 laptop:bg-green-400 desktop:bg-purple-400">
      <div className="relative h-48 overflow-hidden">
        <Image src={imageUrl} alt={`카드 이미지`} fill sizes="100%" className="object-cover" />
      </div>

      <h2 className="p-4 text-lg font-bold text-white">{title}</h2>
    </div>
  );
}
