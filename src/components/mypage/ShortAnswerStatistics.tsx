import StatisticsInfoHeader from '@/components/mypage/StatisticsInfoHeader';

interface ShortAnswerStatisticsProps {
  title: string;
  required?: boolean;
  items: string[];
}

const ShortAnswerStatistics = ({ title, required = false, items }: ShortAnswerStatisticsProps) => {
  const totalCount = items.length;

  return (
    <div className="rounded-[10px] bg-gray-800 px-6 py-10">
      <StatisticsInfoHeader title={title} required={required} totalResponses={totalCount} />
      <div className="flex flex-col items-center justify-between gap-12">
        <div className="max-h-[300px] w-full overflow-y-auto pr-4 tablet:max-h-[500px]">
          {items.map((answer, index) => (
            <div
              key={index}
              className="mb-3 rounded-[10px] bg-gray-600 p-4 font-body3 text-gray-50"
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortAnswerStatistics;
