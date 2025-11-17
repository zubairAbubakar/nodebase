import { requireNoAuth } from '@/lib/auth-utils';
import { LoginForm } from '@/features/auth/components/login-form';

const Page = async () => {
  await requireNoAuth();

  return <LoginForm />;
};
export default Page;
