import WorkerCard, { Worker } from '@/components/@shared/card/worker-card/WorkerCard';

const WORKER_MOCK_DATA: Worker[] = [
  {
    id: 1,
    name: '김무이',
    isAuthor: true,
    position: '디자인',
    level: '현직자',
  },
  {
    id: 2,
    name: '김무이',
    isAuthor: false,
    position: '개발자',
    level: '학습자',
  },
];

function WorkerSection() {
  return (
    <div className="flex flex-col gap-4 laptop:gap-3">
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-5 laptop:grid-cols-1 laptop:gap-4">
        {WORKER_MOCK_DATA.map((workerData) => (
          <WorkerCard key={workerData.id} data={workerData} isEditable />
        ))}
      </div>
      <input
        type="email"
        placeholder="사용자 이메일을 입력해주세요."
        className="rounded-[10px] bg-gray-700 px-4.5 py-3 text-gray-50 placeholder:font-body3-regular placeholder:text-gray-200"
      />
    </div>
  );
}

export default WorkerSection;
