import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from '@/assets/icons';
import { usePresignedUrl } from '@/hooks/usePresignedUrl';

interface ImagePreview {
  url: string;
  file: File;
}

const ABTestForm = () => {
  const [images, setImages] = useState<{ A: ImagePreview | null; B: ImagePreview | null }>({
    A: null,
    B: null,
  });

  const { uploadImage, isUploading } = usePresignedUrl();
  console.log('🚀 ~ ABTestForm ~ isUploading:', isUploading);

  const handleImageUpload = async (type: 'A' | 'B', file: File) => {
    try {
      // 임시 미리보기 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImages((prev) => ({
        ...prev,
        [type]: { url: previewUrl, file },
      }));

      const imageUrl = await uploadImage(file);

      if (imageUrl) {
        // 실제 업로드된 URL로 업데이트
        setImages((prev) => ({
          ...prev,
          [type]: { url: imageUrl, file },
        }));
      }
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-6">
        {(['A', 'B'] as const).map((type) => (
          <div key={type} className="flex w-full flex-col items-center">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] bg-gray-600 tablet:h-[260px] desktop:h-[300px]">
              {images[type] ? (
                <label className="relative block h-full w-full cursor-pointer">
                  <Image src={images[type]!.url} alt={`${type}안`} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="rounded-full bg-gray-50 px-4 py-2">
                      <span className="font-body3 text-gray-900">{type}</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void handleImageUpload(type, file);
                    }}
                  />
                </label>
              ) : (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2">
                  <ImageIcon className="h-8 w-8 text-gray-300" />
                  <span className="px-4 text-gray-300">이미지를 업로드해주세요</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void handleImageUpload(type, file);
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col rounded-[10px] bg-gray-700 px-4 py-3">
        <textarea
          placeholder="자유 응답 필드"
          className="w-full resize-y bg-transparent font-body2 text-gray-50 placeholder:text-gray-200 focus:outline-none"
          disabled
        />
      </div>
    </div>
  );
};

export default ABTestForm;
