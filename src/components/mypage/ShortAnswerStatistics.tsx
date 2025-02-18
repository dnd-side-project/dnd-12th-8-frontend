import { UsersIcon } from '@/assets/icons';

interface ShortAnswerStatisticsProps {
  title: string;
  required?: boolean;
  items: string[];
}

const ShortAnswerStatistics = ({ title, required = false, items }: ShortAnswerStatisticsProps) => {
  const totalCount = items.length;

  return (
    <div className="rounded-[10px] bg-gray-800 px-6 py-10">
      <div className="mb-3 flex items-center gap-1">
        <h3 className="font-title2 text-gray-50">{title}</h3>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="mb-7 flex items-center">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-gray-300" />
          <span className="font-caption1 text-gray-300">{totalCount}명 응답</span>
        </div>
      </div>

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
