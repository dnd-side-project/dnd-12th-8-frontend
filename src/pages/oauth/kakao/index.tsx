import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import OnboardingModal from '@/components/@shared/modal/OnboardingModal';
import { useKakaoLogin } from '@/generated';
import useUser from '@/hooks/useUser';

function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOnboarding, setIsOnboarding] = useState(false);

  const code = searchParams.get('code');
  const { data } = useKakaoLogin({ code: code ?? '' }, { query: { enabled: !!code } });
  const userData = useUser();

  useEffect(() => {
    if (!data || !data.accessToken) return;

    localStorage.setItem('token', data.accessToken);
  }, [data, userData]);

  useEffect(() => {
    if (!userData) return;

    if (!userData?.onboardingCompleted) {
      setIsOnboarding(true);
    } else {
      router.replace('/main');
    }
  }, [userData, router]);

  return (
    <div>
      {isOnboarding ? (
        <OnboardingModal
          onClose={() => {
            setIsOnboarding(false);
            void router.replace('/main');
          }}
        />
      ) : (
        '카카오 로그인 중 ... '
      )}
    </div>
  );
}

export default LoginPage;
