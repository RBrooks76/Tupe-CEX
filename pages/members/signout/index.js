import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '../../../components/Forms/AuthForm';
import MainLayout from '../../../layouts/MainLayout';

const SigninScreen = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/');
  }, []);

  return (
    <MainLayout>
      <AuthForm />
    </MainLayout>
  );
};

export default SigninScreen;
