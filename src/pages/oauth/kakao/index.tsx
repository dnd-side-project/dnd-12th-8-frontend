import { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

function LoginPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;

    const getToken = async () => {
      const response = await axios.get(`http://3.37.76.228:8080/oauth/kakao?code=${code}`);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      window.location.href = '/';
    };

    void getToken();
  }, [code]);

  console.log('kakao', code);
  return <div>카카오 로그인</div>;
}

export default LoginPage;
