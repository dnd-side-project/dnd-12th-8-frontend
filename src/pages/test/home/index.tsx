const HomeTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3 wide:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <div
            key={item}
            className="rounded-lg bg-red-400 p-4 shadow-md transition-colors duration-300 tablet:bg-blue-400 desktop:bg-green-400 wide:bg-purple-400"
          >
            <h2 className="mb-2 text-lg font-bold text-white">카드 {item}</h2>
            <p className="text-sm text-white">
              현재 화면:
              <span className="block font-medium">
                <span className="block tablet:hidden">모바일 (292px 미만)</span>
                <span className="hidden tablet:block desktop:hidden">태블릿 (292px~1023px)</span>
                <span className="hidden desktop:block wide:hidden">데스크톱 (1024px~1439px)</span>
                <span className="hidden wide:block">와이드 (1440px+)</span>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTest;
