interface NoItemHomeProps {
  ment: string;
}

const NoItemHome = ({ ment: category }: NoItemHomeProps) => {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center">
      <p className="mb-2 font-title2 text-gray-50">{category}가 없습니다</p>
      <span className="font-body3 text-gray-100">새로운 Post를 추가해보세요!</span>
    </div>
  );
};

export default NoItemHome;
