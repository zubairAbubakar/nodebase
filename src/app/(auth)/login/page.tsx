import { requireNoAuth } from '@/lib/auth-utils';
import { LoginForm } from '@/features/auth/components/login-form';

const Page = async () => {
  await requireNoAuth();
  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default Page;
