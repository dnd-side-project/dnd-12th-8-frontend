import { useState } from 'react';
import Image from 'next/image';
import UploadChip from './@shared/UploadChip';

function ThumbnailSection() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  console.log('setThumbnail', setThumbnail);

  return (
    <div className="flex items-center justify-center rounded-[20px] bg-gray-800 px-5 py-[100px]">
      {thumbnail ? (
        <Image src={thumbnail.name} alt="thubmnail" fill objectFit="cover" />
      ) : (
        <div className="flex flex-col items-center gap-4.5">
          <UploadChip type="image" />
          <p className="font-subtitle text-gray-0">
            썸네일을 등록해주세요
            <span className="text-red-500">&nbsp;*</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ThumbnailSection;
