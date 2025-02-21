import { useState } from 'react';
import { generatePresignedUrl } from '@/generated';

interface UploadError {
  message: string;
  code: 'PRESIGNED_URL_ERROR' | 'S3_UPLOAD_ERROR' | 'INVALID_FILE' | 'UNKNOWN_ERROR';
}

export const usePresignedUrl = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<UploadError | null>(null);

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      setIsUploading(true);
      setError(null);

      // 1. Presigned URL 요청
      const data = await generatePresignedUrl({
        contentType: file.type,
      });

      if (!data.presignedUrl) {
        throw {
          message: 'Presigned URL이 존재하지 않습니다.',
          code: 'PRESIGNED_URL_ERROR',
        } as UploadError;
      }

      // 2. S3에 직접 업로드
      const uploadResponse = await fetch(data.presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error('S3 업로드 실패 응답:', errorText);
        throw { message: 'S3 업로드에 실패했습니다.', code: 'S3_UPLOAD_ERROR' } as UploadError;
      }

      return data.imageUrl ?? null;
    } catch (error) {
      console.error('업로드 에러:', error);
      const uploadError = error as UploadError;
      setError(
        uploadError.code
          ? uploadError
          : {
              message: '알 수 없는 에러가 발생했습니다.',
              code: 'UNKNOWN_ERROR',
            },
      );
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading, error };
};
