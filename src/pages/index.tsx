import { Button } from '@/components/common/Button';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="mb-8 text-2xl font-bold">메인 페이지</h1>

        <div className="flex flex-col gap-4">
          <Button href="test">테스트 페이지로 이동</Button>
          <Button href="api/hello">API 테스트</Button>
        </div>

        <div className="flex flex-col gap-4">
          <Button href="test/home">홈 - 테스트 페이지로 이동</Button>
        </div>

        <div className="mt-8 space-y-4">
          <h1 className="font-pretendard">Pretendard _ Regular</h1>
          <h1 className="font-ibm text-4xl font-bold">Headline_ Pretendard Bold 36pt</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
