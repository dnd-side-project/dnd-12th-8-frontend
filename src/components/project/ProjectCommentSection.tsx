import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetProjectDetail } from '@/generated';
import useUser from '@/hooks/useUser';
import Badge from '../@shared/bage/Badge';
import { LEVEL_MAP } from '../@shared/select/LevelSelect';
import { ROLE_MAP } from '../@shared/select/RoleSelect';

function ProjectCommentSection() {
  const userData = useUser();
  const router = useRouter();
  const { id } = router.query;

  const { data: projectDetailData } = useGetProjectDetail(Number(id), {
    query: { enabled: !!Number(id) },
  });

  const { comments } = projectDetailData || {};

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
        />
      </div>

      {comments?.map((comment) => (
        <div key={comment.content} className="gap-2 pt-4 pb-7">
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
        </div>
      ))}
    </div>
  );
}

export default ProjectCommentSection;
