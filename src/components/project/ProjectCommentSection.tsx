import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAddComment, useGetProjectDetail } from '@/generated';
import useUser from '@/hooks/useUser';
import Badge from '../@shared/bage/Badge';
import { LEVEL_MAP } from '../@shared/select/LevelSelect';
import { ROLE_MAP } from '../@shared/select/RoleSelect';

function ProjectCommentSection() {
  const userData = useUser();
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const [comment, setComment] = useState('');
  const { mutate: addCommentMutate } = useAddComment({
    mutation: {
      onSuccess: () => {
        // ERROR: 인밸리데이트 안됨
        void queryClient.invalidateQueries({ refetchType: 'all' });
      },
      onError: () => console.error('댓글 추가 실패'),
      onSettled: () => {
        setComment('');
      },
    },
  });

  const { data: projectDetailData } = useGetProjectDetail(Number(id), {
    query: { enabled: !!Number(id) },
  });

  const { comments } = projectDetailData || {};

  const handleSubmit = () => {
    addCommentMutate({ data: { projectId: Number(id), content: comment } });
  };

  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="font-title2 text-gray-50">댓글 {comments?.length}개</h2>

      <div className="flex items-center gap-4 rounded-[10px] bg-gray-700 px-[18px] py-3">
        <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
          <Image
            src={userData?.profileUrl || ''}
            alt="profile"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent font-body2-regular text-gray-50 placeholder:text-gray-200"
          placeholder="댓글 달기"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>

      {comments?.map((comment, idx) => (
        <div
          key={`${comment.content}-${idx}`}
          className="flex flex-col gap-2 border-b border-gray-800 pt-4 pb-7"
        >
          <div className="flex items-center gap-[10px]">
            <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
              <Image
                src={comment.profileUrl || ''}
                alt="profile"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="font-body2 text-gray-50">{comment.memberName}</span>
            <Badge label={ROLE_MAP[comment.job as keyof typeof ROLE_MAP].label} />
            <Badge label={LEVEL_MAP[comment.level as keyof typeof LEVEL_MAP].label} />
          </div>
          <div className="rounded-[10px] bg-gray-800 px-[18px] py-[20px]">
            <p className="font-body3-regular whitespace-pre-wrap text-gray-50">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCommentSection;
