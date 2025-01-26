export default function Test() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      {/* 타이포그래피 테스트 */}
      <section className="space-y-4 text-center">
        <h1 className="text-headline text-purple-500">Headline - 36pt Bold</h1>
        <h2 className="text-title text-purple-400">Title - 24pt SemiBold</h2>
        <h3 className="text-subtitle text-purple-300">Subtitle - 20pt SemiBold</h3>
        <p className="text-body1 text-gray-900">Body1 - 20pt Medium</p>
        <p className="text-body2 text-gray-800">Body2 - 18pt Medium</p>
        <p className="text-body3 text-gray-700">Body3 - 16pt Regular</p>
        <p className="text-caption1 text-gray-600">Caption1 - 14pt Regular</p>
        <p className="text-caption2 text-gray-500">Caption2 - 12pt Regular</p>
        {/* // headerText 적용 + font-ibm */}
        <h1 className="font-headline font-ibm text-purple-500">Headline IMB TEXT - 36pt Bold</h1>
      </section>

      {/* 색상 팔레트 - Purple */}
      <section className="space-y-2">
        <h2 className="text-title mb-4 text-center">Purple Palette</h2>
        <div className="grid grid-cols-10 gap-2">
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-50" />
            <p className="text-caption2 mt-1">50</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-100" />
            <p className="text-caption2 mt-1">100</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-200" />
            <p className="text-caption2 mt-1">200</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-300" />
            <p className="text-caption2 mt-1">300</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-400" />
            <p className="text-caption2 mt-1">400</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-500" />
            <p className="text-caption2 mt-1">500</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-600" />
            <p className="text-caption2 mt-1">600</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-700" />
            <p className="text-caption2 mt-1">700</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-800" />
            <p className="text-caption2 mt-1">800</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-purple-900" />
            <p className="text-caption2 mt-1">900</p>
          </div>
        </div>
      </section>

      {/* 색상 팔레트 - Orange */}
      <section className="space-y-2">
        <h2 className="text-title mb-4 text-center">Orange Palette</h2>
        <div className="grid grid-cols-7 gap-2">
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-50" />
            <p className="text-caption2 mt-1">50</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-100" />
            <p className="text-caption2 mt-1">100</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-200" />
            <p className="text-caption2 mt-1">200</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-300" />
            <p className="text-caption2 mt-1">300</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-400" />
            <p className="text-caption2 mt-1">400</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-500" />
            <p className="text-caption2 mt-1">500</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-orange-600" />
            <p className="text-caption2 mt-1">600</p>
          </div>
        </div>
      </section>

      {/* 색상 팔레트 - Pink */}
      <section className="space-y-2">
        <h2 className="text-title mb-4 text-center">Pink Palette</h2>
        <div className="grid grid-cols-7 gap-2">
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-50" />
            <p className="text-caption2 mt-1">50</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-100" />
            <p className="text-caption2 mt-1">100</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-200" />
            <p className="text-caption2 mt-1">200</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-300" />
            <p className="text-caption2 mt-1">300</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-400" />
            <p className="text-caption2 mt-1">400</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-500" />
            <p className="text-caption2 mt-1">500</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-pink-600" />
            <p className="text-caption2 mt-1">600</p>
          </div>
        </div>
      </section>

      {/* 색상 팔레트 - Gray */}
      <section className="space-y-2">
        <h2 className="text-title mb-4 text-center">Gray Palette</h2>
        <div className="grid grid-cols-11 gap-2">
          <div className="text-center">
            <div className="bg-gray-0 h-20 rounded-lg" />
            <p className="text-caption2 mt-1">0</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-50" />
            <p className="text-caption2 mt-1">50</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-100" />
            <p className="text-caption2 mt-1">100</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-200" />
            <p className="text-caption2 mt-1">200</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-300" />
            <p className="text-caption2 mt-1">300</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-400" />
            <p className="text-caption2 mt-1">400</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-500" />
            <p className="text-caption2 mt-1">500</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-600" />
            <p className="text-caption2 mt-1">600</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-700" />
            <p className="text-caption2 mt-1">700</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-800" />
            <p className="text-caption2 mt-1">800</p>
          </div>
          <div className="text-center">
            <div className="h-20 rounded-lg bg-gray-900" />
            <p className="text-caption2 mt-1">900</p>
          </div>
        </div>
      </section>
    </div>
  );
}
