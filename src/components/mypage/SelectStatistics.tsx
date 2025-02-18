import { useState } from 'react';
import { UsersIcon } from '@/assets/icons';
import { processChartItems } from '@/utils/svgUtils';
import DonutChart from './DonutChart';

interface StatisticsItem {
  label: string;
  value: number;
}

interface StatisticsDonutProps {
  title: string;
  required?: boolean;
  items: StatisticsItem[];
  colorScheme?: 'purple' | 'orange';
}

const SelectStatistics = ({
  title,
  required = false,
  items,
  colorScheme = 'purple',
}: StatisticsDonutProps) => {
  const [sortBy, setSortBy] = useState<'default' | 'count'>('default');

  const sortedRawItems = sortBy === 'count' ? [...items].sort((a, b) => b.value - a.value) : items;

  const processedItems = processChartItems(sortedRawItems, colorScheme);

  const totalCount = processedItems.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="rounded-[10px] bg-gray-800 px-6 py-10">
      <div className="mb-3 flex items-center gap-1">
        <h3 className="font-title2 text-gray-50">{title}</h3>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-gray-300" />
          <span className="font-caption1 text-gray-300">{totalCount}명 응답</span>
        </div>
        <div className="flex items-center gap-4 font-caption1 text-gray-300">
          <button
            className={sortBy === 'default' ? 'text-gray-50' : ''}
            onClick={() => setSortBy('default')}
          >
            항목 순
          </button>
          <button
            className={sortBy === 'count' ? 'text-gray-50' : ''}
            onClick={() => setSortBy('count')}
          >
            답변 많은 순
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-12 tablet:flex-row laptop:gap-25">
        <div>
          <DonutChart items={processedItems} />
        </div>

        <div className="w-full">
          {processedItems.map((item, index) => (
            <div key={index} className="font-bod1 flex w-full items-center gap-2 text-gray-50">
              <div
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-1 justify-between">
                <span className="mr-2">{item.label}</span>
                <div className="flex gap-2">
                  <span className="text-gray-400">{item.value}명</span>
                  <span className="whitespace-nowrap text-gray-400">({item.percentage}%)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectStatistics;
