import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from '@/assets/icons';

interface ImagePreview {
  url: string;
  file: File;
}

const ABTestForm = () => {
  const [images, setImages] = useState<{ A: ImagePreview | null; B: ImagePreview | null }>({
    A: null,
    B: null,
  });

  const handleImageUpload = async (type: 'A' | 'B', file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => ({
      ...prev,
      [type]: { url, file },
    }));
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-6">
        {(['A', 'B'] as const).map((type) => (
          <div key={type} className="flex w-full flex-col items-center">
            <span className="mb-2 rounded-full bg-purple-400 px-4 py-2 text-white">{type}</span>
            <div className="relative h-[260px] w-full overflow-hidden rounded-[10px] bg-gray-600">
              {images[type] ? (
                <Image src={images[type]!.url} alt={`${type}안`} fill className="object-cover" />
              ) : (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2">
                  <ImageIcon className="h-8 w-8 text-gray-300" />
                  <span className="text-gray-300">이미지를 업로드해주세요</span>
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
      <div className="mt-4">
        <textarea
          placeholder="피드백을 입력해주세요"
          className="w-full rounded-[10px] bg-gray-600 p-4 font-body2 text-gray-50 placeholder:text-gray-200"
          rows={3}
        />
      </div>
    </div>
  );
};

export default ABTestForm;
