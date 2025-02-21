import { MemberSubInfoResponse } from '@/generated';
import WorkerCard from '../@shared/card/worker-card/WorkerCard';

function ProjectMemberSection({ data }: { data: MemberSubInfoResponse[] }) {
  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="font-title2 text-gray-50">작업자</h2>
      <div className="grid grid-cols-1 gap-x-5 gap-y-4 tablet:grid-cols-2">
        {data.map((item) => (
          <WorkerCard
            key={item.memberName}
            data={{
              id: 12,
              name: item.memberName || '',
              isAuthor: false,
              position: item.job || 'PLANNER',
              level: item.level || 'LEARNER',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectMemberSection;
