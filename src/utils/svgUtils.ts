type ColorScheme = 'purple' | 'orange';

const COLOR_SCHEMES = {
  purple: [
    'var(--color-purple-100)',
    'var(--color-purple-500)',
    'var(--color-purple-400)',
    'var(--color-purple-300)',
    'var(--color-purple-200)',
  ],
  orange: [
    'var(--color-orange-100)',
    'var(--color-orange-300)',
    'var(--color-orange-200)',
    'var(--color-orange-400)',
    'var(--color-orange-500)',
  ],
};

interface ChartItem {
  label: string;
  value: number;
}

interface ProcessedChartItem extends ChartItem {
  percentage: number;
  color: string;
  path: string;
  textX: number;
  textY: number;
}

const getCategoryDataPath = (
  percent: number,
  startAngle: number,
  outerRadius: number = 50,
  innerRadius: number = 23,
) => {
  const x = 50;
  const y = 50;

  const startRad = (startAngle / 180) * Math.PI;
  const endRad = ((startAngle + percent * 360) / 180) * Math.PI;

  const outerStartX = x + outerRadius * Math.cos(startRad);
  const outerStartY = y + outerRadius * Math.sin(startRad);
  const outerEndX = x + outerRadius * Math.cos(endRad);
  const outerEndY = y + outerRadius * Math.sin(endRad);

  const innerStartX = x + innerRadius * Math.cos(endRad);
  const innerStartY = y + innerRadius * Math.sin(endRad);
  const innerEndX = x + innerRadius * Math.cos(startRad);
  const innerEndY = y + innerRadius * Math.sin(startRad);

  const largeArcFlag = percent > 0.5 ? 1 : 0;

  return `
    M ${outerStartX} ${outerStartY}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
    L ${innerStartX} ${innerStartY}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}
    Z
  `;
};

export const processChartItems = (
  items: ChartItem[],
  colorScheme: ColorScheme = 'purple',
): ProcessedChartItem[] => {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const colors = COLOR_SCHEMES[colorScheme];

  return items.map((item, index) => {
    const percentage = item.value / total;
    const startAngle = items
      .slice(0, index)
      .reduce((acc, curr) => acc + (curr.value / total) * 360, 0);

    const textAngle = startAngle + (item.value / total) * 180;
    const textRadius = 37;
    const textX = 50 + textRadius * Math.cos((textAngle / 180) * Math.PI);
    const textY = 50 + textRadius * Math.sin((textAngle / 180) * Math.PI);

    return {
      ...item,
      percentage: Math.round(percentage * 100),
      color: colors[index % colors.length],
      path: getCategoryDataPath(percentage, startAngle),
      textX,
      textY,
    };
  });
};
