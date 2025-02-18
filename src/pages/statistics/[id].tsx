import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import SelectStatistics from '@/components/mypage/SelectStatistics';
import StatisticsSidebar from '@/components/mypage/StatisticsSidebar';

const statisticsFormHeader = {
  title: 'AI 추천 시스템 프로젝트',
  targetJob: 'developer',
  thumbnailImgUrl: 'https://picsum.photos/id/217/100/100',
  categoryNames: ['웹', '식음료'],
};

const sidebarInfo = {
  totalResponses: 25,
  quizCompletionRate: 98,
  startDate: '25.03.10',
  dueDate: '25.03.13',
};

const statisticsData = {
  title: '객관식 질문',
  required: true,
  items: [
    { label: 'A', value: 5 },
    { label: 'B', value: 6 },
    { label: 'D', value: 8 },
    { label: 'E', value: 9 },
    { label: 'F', value: 10 },
  ],
};

// 컴포넌트에서 사용

const StatisticsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('🚀 ~ StatisticsPage ~ id:', id);

  const onClickDelete = () => {
    console.log('삭제하기');
  };

  const onClickClose = () => {
    console.log('답변 마감하기');
  };

  return (
    <div className="mx-auto flex flex-col gap-8 p-4 laptop:flex-row pb-55">
      <div className="flex-1">
        <div className="mb-8">
          <SmallPostCard
            title={statisticsFormHeader.title}
            targetJob={statisticsFormHeader.targetJob}
            thumbnailImgUrl={statisticsFormHeader.thumbnailImgUrl}
            categoryNames={statisticsFormHeader.categoryNames}
          />
        </div>
        <SelectStatistics {...statisticsData} />
      </div>
      <StatisticsSidebar
        onClickDelete={onClickDelete}
        onClickClose={onClickClose}
        totalResponses={sidebarInfo.totalResponses}
        quizCompletionRate={sidebarInfo.quizCompletionRate}
        startDate={sidebarInfo.startDate}
        dueDate={sidebarInfo.dueDate}
      />
    </div>
  );
};

export default StatisticsPage;
