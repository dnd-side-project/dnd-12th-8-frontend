import { UsersIcon } from '@/assets/icons';

interface StatisticsInfoHeaderProps {
  title: string;
  required?: boolean;
  totalResponses: number;
}

export default function StatisticsInfoHeader({
  title,
  required,
  totalResponses,
}: StatisticsInfoHeaderProps) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-1">
        <h3 className="font-title2 text-gray-50">{title}</h3>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="flex items-center gap-2">
        <UsersIcon className="h-5 w-5 text-gray-300" />
        <span className="font-caption1 text-gray-300">{totalResponses}명 응답</span>
      </div>
    </div>
  );
}
