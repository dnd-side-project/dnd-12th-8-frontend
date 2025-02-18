import { CalendarIcon, FileIcon, UsersIcon } from '@/assets/icons';
import Button from '@/components/@shared/button/Button';

interface StatisticsSidebarProps {
  onClickDelete: () => void;
  onClickClose: () => void;
  totalResponses: number;
  quizCompletionRate: number;
  startDate: string;
  dueDate: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}

const StatisticsSidebar = ({
  onClickDelete,
  onClickClose,
  totalResponses,
  quizCompletionRate,
  startDate,
  dueDate,
}: StatisticsSidebarProps) => {
  const sidebarInfo = () => {
    const items = [
      {
        icon: <UsersIcon className="h-5 w-5" />,
        label: '응답자 수',
        value: `${totalResponses}명`,
      },
      {
        icon: <FileIcon className="h-5 w-5" />,
        label: '퀴즈 정답률',
        value: `${quizCompletionRate}%`,
      },
      {
        icon: <CalendarIcon className="h-5 w-5" />,
        label: '기간',
        value: `${startDate} ~ ${dueDate}`,
      },
    ];

    const InfoItem = ({ icon, label, value }: InfoItemProps) => (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 pr-4">
          {icon}
          <span>{label}</span>
        </div>
        <span>{value}</span>
      </div>
    );

    return (
      <div className="flex w-auto flex-col gap-4 rounded-[10px] p-4 font-body3 text-gray-50 laptop:bg-gray-800 laptop:p-6 laptop:mt-4">
        {items.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full border-t-[1px] border-gray-700 bg-gray-900 px-4 pb-4 laptop:relative laptop:w-[360px] laptop:border-none">
      <div className="mx-auto w-full flex-col items-stretch justify-between gap-2 tablet:max-w-[800px] laptop:flex laptop:flex-col-reverse">
        <div className="flex-1">{sidebarInfo()}</div>
        <div className="flex flex-row gap-4 laptop:gap-2 laptop:flex-col-reverse">
          <Button
            variant="lined"
            size="lg"
            className={`h-[48px] max-w-55 px-4 tablet:max-w-100 laptop:h-[60px]`}
            onClick={onClickDelete}
          >
            삭제하기
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={onClickClose}
            className={`h-[48px] max-w-55 px-4 tablet:max-w-100 laptop:h-[60px]`}
          >
            답변 마감하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSidebar;
