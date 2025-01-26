import { Button } from '@/components/common/Button';

const Home = () => {
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <h1 className="mb-8 text-2xl font-bold">메인 페이지</h1>
      <Button href="test">테스트 페이지로 이동</Button>
      <Button href="api/hello" className="my-4">
        API 테스트
      </Button>
      <h1 className="font-pretendard">Pretendard _ Regular</h1>
      <h1 className="font-ibm text-4xl font-bold">Headline_ Pretendard Bold 36pt</h1>
    </main>
  );
};

export default Home;
