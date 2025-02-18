import { UsersIcon } from '@/assets/icons';

interface LikertScaleProps {
  title: string;
  required?: boolean;
  results: { option: string; count: number }[];
}

const LikertScale = ({ title, required = false, results }: LikertScaleProps) => {
  const totalResponses = results.reduce((sum, result) => sum + result.count, 0);

  const percentages = results.map((result) => (result.count / totalResponses) * 100);

  const averageScore =
    results.reduce((sum, result, index) => {
      return sum + result.count * (index + 1);
    }, 0) / totalResponses;

  return (
    <div className="rounded-[10px] bg-gray-800 px-6 py-10">
      <div className="mb-3 flex items-center gap-1">
        <h3 className="font-title2 text-gray-50">{title}</h3>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="mb-3 flex items-center">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-gray-300" />
          <span className="font-caption1 text-gray-300">{totalResponses}명 응답</span>
        </div>
      </div>
      <div className="mb-7 font-caption1 text-purple-400">평균 {averageScore.toFixed(1)}점</div>

      <div className="mb-4 flex h-10 w-full overflow-hidden rounded-sm font-body3 tablet:font-body1">
        {percentages.map((percentage, index) => (
          <div
            key={index}
            style={{ width: `${percentage === 0 ? '40px' : `${percentage}%`}` }}
            className={`flex items-center justify-center text-white ${
              index === 0
                ? 'bg-pink-100'
                : index === 1
                  ? 'bg-pink-200'
                  : index === 2
                    ? 'bg-pink-300'
                    : index === 3
                      ? 'bg-pink-400'
                      : 'bg-pink-500'
            }`}
          >
            {percentage === 0 ? '0%' : percentage > 5 && `${Math.round(percentage)}%`}
          </div>
        ))}
      </div>

      <div className="flex justify-between px-2">
        <span className="font-body3 text-gray-300">매우 나쁨 (1점)</span>
        <span className="font-body3 text-gray-300">매우 좋음 (5점)</span>
      </div>
    </div>
  );
};

export default LikertScale;
