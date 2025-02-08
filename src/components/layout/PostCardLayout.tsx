import Image from 'next/image';

export default function PostCardLayout({ item }: { item: number }) {
  return (
    <div className="h-70 overflow-hidden rounded-lg bg-red-400 shadow-md transition-colors duration-300 tablet:bg-blue-400 laptop:bg-green-400 desktop:bg-purple-400">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://picsum.photos/id/${item + 50}/200/300`}
          alt={`카드 ${item} 이미지`}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>

      <h2 className="p-4 text-lg font-bold text-white">카드 {item}</h2>
    </div>
  );
}
