import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SiteLayout from '../../layouts/SiteLayout';
import Withdraw from '../../components/Widgets/Withdraw/WithdrawSection';
import Footer from '../../components/Footer/Footer';

const WithdrawScreen = () => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (localToken && process.env.NEXT_PUBLIC_APP_ENV.toLowerCase() === 'production') {
    //   router.push('/home');
    // } else if (!localToken) {
    //   router.push('/');
    // }
  }, []);

  return (
    <>
      <SiteLayout>
        <Withdraw />
      </SiteLayout>
      <Footer />
    </>
  );
};

export default WithdrawScreen;
