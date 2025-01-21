import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/common/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col items-center justify-center p-8`}
    >
      <h1 className="text-2xl font-bold mb-8">메인 페이지</h1>
      <Button href="test">테스트 페이지로 이동</Button>
      <Button href="api/hello" className="my-4">
        API 테스트
      </Button>
    </div>
  );
}
