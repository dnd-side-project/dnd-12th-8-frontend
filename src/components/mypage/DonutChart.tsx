interface DonutChartItem {
  path: string;
  color: string;
  percentage: number;
  textX: number;
  textY: number;
}

interface DonutChartProps {
  items: DonutChartItem[];
}

const DonutChart = ({ items }: DonutChartProps) => {
  return (
    <div className="relative h-[260px] w-[260px]">
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
              {item.percentage}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DonutChart;
