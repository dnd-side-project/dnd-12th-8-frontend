import Image from 'next/image';
import { UsersIcon } from '@/assets/icons';
import DonutChart from '@/components/mypage/DonutChart';
import { processChartItems } from '@/utils/svgUtils';
import TextChip from '../@shared/chip/TextChip';

interface ABTestStatisticsProps {
  title: string;
  required: boolean;
  responseA: number;
  responseB: number;
  imageAUrl: string;
  imageBUrl: string;
  feedback: string[];
}

const ABTestStatistics = ({
  title,
  required,
  responseA,
  responseB,
  imageAUrl,
  imageBUrl,
  feedback,
}: ABTestStatisticsProps) => {
  const chartItems = processChartItems(
    [
      { label: 'A', value: responseA },
      { label: 'B', value: responseB },
    ],
    'orange',
  );
  const totalCount = responseA + responseB;

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

      <div className="flex flex-col items-center gap-8 laptop:flex-row laptop:items-center">
        <div className="flex w-full justify-center laptop:w-auto">
          <DonutChart items={chartItems} isABTest={true} />
        </div>

        <div className="flex w-full flex-1 justify-center gap-4">
          <div className="flex max-w-[180px] flex-1 flex-col items-center">
            <div className="mb-2">
              <TextChip label="A" />
            </div>
            <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[10px] tablet:h-[160px] tablet:w-[160px]">
              <Image
                src={imageAUrl}
                alt="A안"
                fill
                sizes="100%"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex max-w-[180px] flex-1 flex-col items-center">
            <div className="mb-2">
              <TextChip label="B" />
            </div>
            <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[10px] tablet:h-[160px] tablet:w-[160px]">
              <Image
                src={imageBUrl}
                alt="B안"
                fill
                sizes="100%"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="max-h-[200px] w-full overflow-y-auto pr-4 tablet:max-h-[300px]">
            {feedback.map((answer, index) => (
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
    </div>
  );
};

export default ABTestStatistics;
