interface DonutChartItem {
  path: string;
  color: string;
  percentage: number;
  textX: number;
  textY: number;
  label?: string;
}

interface DonutChartProps {
  items: DonutChartItem[];
  isABTest?: boolean;
}

const DonutChart = ({ items, isABTest }: DonutChartProps) => {
  return (
    <div className={`relative ${isABTest ? 'h-[200px] w-[200px]' : 'h-[260px] w-[260px]'}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        {items.map((item, index) => (
          <g key={index}>
            <path d={item.path} fill={item.color} />
            <text
              x={item.textX}
              y={item.textY}
              fill="white"
              fontSize="8"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(90 ${item.textX} ${item.textY})`}
            >
              {isABTest && (
                <tspan x={item.textX} dy="-1em">
                  {item.label}
                </tspan>
              )}
              <tspan x={item.textX} dy={isABTest ? '1.5em' : '0'}>
                {item.percentage}%
              </tspan>
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DonutChart;
