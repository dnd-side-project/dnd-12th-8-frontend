import { useRouter } from 'next/router';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import ABTestStatistics from '@/components/mypage/ABTestStatistics';
import LikertStatistics from '@/components/mypage/LikertStatistics';
import SelectStatistics from '@/components/mypage/SelectStatistics';
import ShortAnswerStatistics from '@/components/mypage/ShortAnswerStatistics';
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
  title: '질문 예시입니다..!',
  required: true,
  items: [
    { label: 'A', value: 5 },
    { label: 'B', value: 6 },
    { label: 'D', value: 8 },
    { label: 'E', value: 9 },
    { label: 'F', value: 10 },
  ],
};

const shortAnswerStatisticsData = {
  title: '어떤 점을 개선하면 좋을까요?',
  required: true,
  items: [
    '로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다 로딩 속도가 느립니다',
    '모바일 대응이 필요해요',
    '폰트 크기가 좀 작아요',
    '전반적으로 만족스럽습니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
    '색상 대비가 부족합니다',
  ],
};

const ABTestStatisticsData = {
  title: '어떤 디자인이 더 좋은가요?',
  required: true,
  responseA: 30,
  responseB: 20,
  imageAUrl: 'https://picsum.photos/id/238/200/300',
  imageBUrl: 'https://picsum.photos/id/239/200/300',
  feedback: [
    '좋아요',
    '이런 부분이 이래이래이래서 좋았어요!',
    '보통이에요',
    '별로에요',
    '별로에요',
    '별로에요',
    '별로에요',
    '별로에요',
    '별로에요',
    '별로에요',
    '별로에요',
  ],
};

const likertScaleStatisticsData = {
  title: '이 프로젝트의 UI는 얼마나 만족스러운가요?',
  required: true,
  results: [
    {
      option: '매우 나쁨',
      count: 0,
    },
    {
      option: '나쁨',
      count: 3,
    },
    {
      option: '보통',
      count: 8,
    },
    {
      option: '좋음',
      count: 10,
    },
    {
      option: '매우 좋음',
      count: 3,
    },
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
    <div className="mx-auto flex flex-col gap-8 p-4 pb-55 laptop:flex-row laptop:pb-10">
      <div className="flex-1">
        <div className="mb-8">
          <SmallPostCard
            title={statisticsFormHeader.title}
            targetJob={statisticsFormHeader.targetJob}
            thumbnailImgUrl={statisticsFormHeader.thumbnailImgUrl}
            categoryNames={statisticsFormHeader.categoryNames}
            moveToDetail={`/projects/${id}`}
          />
        </div>
        <div className="flex flex-col gap-8">
          <LikertStatistics {...likertScaleStatisticsData} />
          <ABTestStatistics {...ABTestStatisticsData} />
          <SelectStatistics {...statisticsData} />
          <ShortAnswerStatistics {...shortAnswerStatisticsData} />
        </div>
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
