import { useGetMemberInfo } from '@/generated';

function useUser() {
  const { data } = useGetMemberInfo();

  return data ? data : null;
}

export default useUser;
