import { requireNoAuth } from '@/lib/auth-utils';
import { RegisterForm } from '@/features/auth/components/register-form';

const Page = async () => {
  await requireNoAuth();

  return <RegisterForm />;
};

export default Page;
