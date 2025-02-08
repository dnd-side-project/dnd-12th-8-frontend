import { cn } from '@/utils/cn';

const palettes = [
  {
    name: 'Purple Palette',
    colors: [
      { name: '50', class: 'bg-purple-50' },
      { name: '100', class: 'bg-purple-100' },
      { name: '200', class: 'bg-purple-200' },
      { name: '300', class: 'bg-purple-300' },
      { name: '400', class: 'bg-purple-400' },
      { name: '500', class: 'bg-purple-500' },
      { name: '600', class: 'bg-purple-600' },
      { name: '700', class: 'bg-purple-700' },
      { name: '800', class: 'bg-purple-800' },
      { name: '900', class: 'bg-purple-900' },
    ],
  },
  {
    name: 'Orange Palette',
    colors: [
      { name: '50', class: 'bg-orange-50' },
      { name: '100', class: 'bg-orange-100' },
      { name: '200', class: 'bg-orange-200' },
      { name: '300', class: 'bg-orange-300' },
      { name: '400', class: 'bg-orange-400' },
      { name: '500', class: 'bg-orange-500' },
      { name: '600', class: 'bg-orange-600' },
    ],
  },
  {
    name: 'Pink Palette',
    colors: [
      { name: '50', class: 'bg-pink-50' },
      { name: '100', class: 'bg-pink-100' },
      { name: '200', class: 'bg-pink-200' },
      { name: '300', class: 'bg-pink-300' },
      { name: '400', class: 'bg-pink-400' },
      { name: '500', class: 'bg-pink-500' },
      { name: '600', class: 'bg-pink-600' },
    ],
  },
  {
    name: 'Gray Palette',
    colors: [
      { name: '0', class: 'bg-gray-0' },
      { name: '50', class: 'bg-gray-50' },
      { name: '100', class: 'bg-gray-100' },
      { name: '200', class: 'bg-gray-200' },
      { name: '300', class: 'bg-gray-300' },
      { name: '400', class: 'bg-gray-400' },
      { name: '500', class: 'bg-gray-500' },
      { name: '600', class: 'bg-gray-600' },
      { name: '700', class: 'bg-gray-700' },
      { name: '800', class: 'bg-gray-800' },
      { name: '900', class: 'bg-gray-900' },
    ],
  },
];

export default function Test() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      {/* 타이포그래피 테스트 */}
      <section className="space-y-4 text-center">
        <h1 className="font-ibm font-headline text-purple-500">Headline IMB TEXT - 36pt Bold</h1>
        <h1 className="font-headline text-purple-500">Headline - 36pt Bold</h1>
        <h2 className="font-title1 text-purple-400">Title - 28pt SemiBold</h2>
        <h3 className="font-subtitle text-purple-300">Subtitle - 20pt SemiBold</h3>
        <p className="font-body1 text-gray-900">Body1 - 20pt Medium</p>
        <p className="font-body2 text-gray-800">Body2 - 18pt Medium</p>
        <p className="font-body3 text-gray-700">Body3 - 16pt Regular</p>
        <p className="font-caption1 text-gray-600">Caption1 - 14pt Regular</p>
        <p className="font-caption2 text-gray-500">Caption2 - 12pt Regular</p>
      </section>

      {/* 색상 팔레트 */}
      {palettes.map((palette, index) => (
        <section key={index} className="space-y-2">
          <h2 className="mb-4 text-center font-headline">{palette.name}</h2>
          <div
            className={cn('grid', {
              'grid-cols-10': palette.name === 'Purple Palette',
              'grid-cols-7': palette.name === 'Orange Palette' || palette.name === 'Pink Palette',
              'grid-cols-11': palette.name === 'Gray Palette',
            })}
          >
            {palette.colors.map((color, colorIndex) => (
              <div key={colorIndex} className="text-center">
                <div className={cn('h-20 rounded-lg', color.class)} />
                <p className="text-caption2 mt-1">{color.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
